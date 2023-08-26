import React, {useCallback, useEffect, useMemo, useReducer, useRef, useState} from 'react'

import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import * as uuid from 'uuid'
import Box from '@mui/material/Box'
import {ICommand, commands} from './commands'

import {CommandCard} from './components/CommandCard'
import {CommandDetails, EditCommandCard} from './components'
import {Button, Typography} from '@mui/material'
import {convertToGCode} from './utils/convert-to-gcode'
import {saveTextToFile} from '../../utils/saveTextToFile'
import {FileInput, IFileInputRef} from '../../components/FileInput'
import {TabsNavigator} from './components/TabNavigator'

const initialState = {
  selectedCommands: [],
}

const dragReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_COMMAND':
      return {
        ...state,
        selectedCommands: [...state.selectedCommands, {...action.payload, id: uuid.v4()}],
      }
    case 'DELETE_COMMAND':
      return {
        ...state,
        selectedCommands: state.selectedCommands.filter((cmd: any) => cmd.id !== action.payload.id),
      }
    case 'REORDER_COMMANDS':
      // eslint-disable-next-line no-case-declarations
      const {sourceIndex, destinationIndex} = action.payload
      // eslint-disable-next-line no-case-declarations
      const updatedCommands = Array.from(state.selectedCommands)
      // eslint-disable-next-line no-case-declarations
      const [removed] = updatedCommands.splice(sourceIndex, 1)
      updatedCommands.splice(destinationIndex, 0, removed)
      return {
        ...state,
        selectedCommands: updatedCommands,
      }
    case 'SET_IS_ACTIVE_PARAM':
      return {
        ...state,
        selectedCommands: state.selectedCommands.map((cmd: ICommand) => {
          if (cmd.id === action.payload.id) {
            return action.payload.isActive
              ? {
                  ...cmd,
                  params: cmd.params?.map((param) =>
                    param.name === action.payload.paramName ? {...param, isActive: action.payload.value} : param,
                  ),
                }
              : {
                  ...cmd,
                  params: cmd.params?.map((param) =>
                    param.name === action.payload.paramName ? {...param, value: action.payload.value} : param,
                  ),
                }
          } else {
            return cmd
          }
        }),
      }
    default:
      return state
  }
}

const GCodeUiConstructor = () => {
  const [selectedViewCommand, setSelectedViewCommand] = useState<ICommand | null>(null)
  const [state, dispatch] = useReducer(dragReducer, initialState)
  const [gcode, setGCode] = useState('')
  const [fileContent, setFileContent] = useState<string>('')
  const openFileRef = useRef<IFileInputRef | null>(null)

  const addCommand = useCallback(
    (command: ICommand) => () => {
      dispatch({type: 'ADD_COMMAND', payload: command})
    },
    [],
  )

  const deleteCommand = useCallback(
    (command: ICommand) => () => {
      console.log(command)

      dispatch({type: 'DELETE_COMMAND', payload: command})
    },
    [],
  )

  const onDragEnd = useCallback((result: any) => {
    if (!result.destination) {
      return
    }
    dispatch({
      type: 'REORDER_COMMANDS',
      payload: {sourceIndex: result.source.index, destinationIndex: result.destination.index},
    })
  }, [])

  const handleChange = useCallback((id: string, paramName: string, value: any, isActive?: boolean) => {
    dispatch({type: 'SET_IS_ACTIVE_PARAM', payload: {id, paramName, value, isActive}})
  }, [])

  const handleOpen = (content: string) => {
    setFileContent(content)
  }

  const tabs = useMemo(
    () => [
      <Typography key="t1" whiteSpace="pre-wrap">
        {gcode}
      </Typography>,
      <CommandDetails key="t2" command={selectedViewCommand} />,
    ],
    [gcode, selectedViewCommand],
  )

  useEffect(() => {
    setGCode(convertToGCode(state.selectedCommands))
  }, [state.selectedCommands])

  return (
    <Box display="flex" flex={1} flexDirection="column" p={2}>
      <Box display="flex" flexDirection="row" mb={2}>
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Button style={{marginTop: 20}} size="large" variant="contained" onClick={() => openFileRef.current?.open()}>
          Открыть
        </Button>
        <Button
          style={{marginTop: 20, marginLeft: 10}}
          size="large"
          variant="contained"
          onClick={() => saveTextToFile(gcode, 'gcode')}>
          Сохранить
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'row',
        }}>
        <Box flexDirection="column" width={'25rem'} height={'100%'} border={1} borderRadius={5} borderColor={'#3b3b3b'}>
          {commands.map((command: ICommand, index) => (
            <Box mt={index < commands.length ? 1 : 0} key={command.name}>
              <CommandCard
                command={command}
                onClick={() => setSelectedViewCommand(command)}
                onAdd={addCommand(command)}
              />
              <Typography>{fileContent}</Typography>
            </Box>
          ))}
        </Box>
        <Box width={10} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={`${1}`} key={`column${1}`}>
            {(provided, snapshot) => (
              <Box
                ref={provided.innerRef}
                width={'30%'}
                height={'100%'}
                border={1}
                borderRadius={5}
                borderColor={'#3b3b3b'}
                style={{
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
                {...provided.droppableProps}>
                {state.selectedCommands.map((command: ICommand, index: number) => (
                  <Draggable draggableId={command.id} key={command.id} index={index}>
                    {(provided) => (
                      <Box
                        // mb={index < state.selectedCommands.length ? 1 : 0}
                        mt={index < state.selectedCommands.length ? 1 : 0}
                        ml={2}
                        mr={2}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <EditCommandCard
                          key={command.id}
                          command={command}
                          onClick={() => setSelectedViewCommand(command)}
                          onDelete={deleteCommand(command)}
                          onChange={handleChange}
                        />
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
          <Box width={10} />
          <Box p={1} display="flex" width={'40%'} height={'100%'} border={1} borderRadius={5} borderColor={'#3b3b3b'}>
            <TabsNavigator tabs={tabs} />
          </Box>
        </DragDropContext>
      </Box>
      <FileInput ref={openFileRef} onFileChange={handleOpen} />
    </Box>
  )
}

export {GCodeUiConstructor}
