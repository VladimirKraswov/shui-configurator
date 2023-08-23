import React, {useCallback, useReducer, useState} from 'react'

import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import Box from '@mui/material/Box'
import {ICommand, commands} from './commands'

import {CommandCard} from './components/CommandCard'
import {CommandDetails, EditCommandCard} from './components'
import {Typography} from '@mui/material'

const initialState = {
  selectedCommands: [],
}

const dragReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_COMMAND':
      return {
        ...state,
        selectedCommands: [...state.selectedCommands, {...action.payload, id: Math.random()}],
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
          if (cmd.name === action.payload.commandName) {
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

const convertToGCode = (commands: ICommand[]) => {
  let result = ''

  commands.forEach((command) => {
    result += command.name
    command.params?.forEach((param) => {
      if (param.isActive) {
        result += ` ${param.name}${param.value}`
      }

      if (typeof param.value === 'boolean' && param.value) {
        result += ` ${param.name}`
      }
    })
    result += '\n'
  })

  return result
}

const GCodeUiConstructor = () => {
  const [selectedViewCommand, setSelectedViewCommand] = useState<ICommand | null>(null)
  const [state, dispatch] = useReducer(dragReducer, initialState) // Используйте useReducer

  console.log('STATE', state)

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

  const handleChange = useCallback((commandName: string, paramName: string, value: any, isActive?: boolean) => {
    dispatch({type: 'SET_IS_ACTIVE_PARAM', payload: {commandName, paramName, value, isActive}})
  }, [])

  return (
    <Box
      p={2}
      sx={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#262626',
      }}>
      <Box
        p={2}
        flexDirection="column"
        width={'25rem'}
        height={'100%'}
        bgcolor={'#1e1e1e'}
        border={1}
        borderRadius={5}
        borderColor={'#3b3b3b'}>
        {commands.map((command: ICommand, index) => (
          <Box
            style={{
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
            mb={index < commands.length ? 1 : 0}
            key={command.name}>
            <CommandCard
              command={command}
              onClick={() => setSelectedViewCommand(command)}
              onAdd={addCommand(command)}
            />
          </Box>
        ))}
      </Box>
      <Box width={10} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={`${1}`} key={`column${1}`}>
          {(provided, snapshot) => (
            <Box
              ref={provided.innerRef}
              p={2}
              width={'30%'}
              height={'100%'}
              bgcolor={'#1e1e1e'}
              border={1}
              borderRadius={5}
              borderColor={'#3b3b3b'}
              style={{
                overflowY: 'auto',
                overflowX: 'hidden',
              }}
              {...provided.droppableProps}>
              {state.selectedCommands.map((command: ICommand, index: number) => (
                <Draggable draggableId={`${command.name}${index}`} key={`${command.name}${index}`} index={index}>
                  {(provided) => (
                    <Box
                      mb={index < state.selectedCommands.length ? 1 : 0}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <EditCommandCard
                        key={command.name}
                        command={command}
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
        <Box
          p={2}
          display="flex"
          width={'40%'}
          height={'100%'}
          bgcolor={'#1e1e1e'}
          border={1}
          borderRadius={5}
          borderColor={'#3b3b3b'}>
          {selectedViewCommand && <CommandDetails command={selectedViewCommand} />}
          <Typography whiteSpace="pre-wrap" color="white">
            {convertToGCode(state.selectedCommands)}
          </Typography>
        </Box>
      </DragDropContext>
    </Box>
  )
}

export {GCodeUiConstructor}
