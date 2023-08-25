import React, {useCallback, useEffect, useReducer, useState} from 'react'

import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import * as uuid from 'uuid'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import {ICommand, commands} from './commands'

import {CommandCard} from './components/CommandCard'
import {CommandDetails, EditCommandCard} from './components'
import {Button, Typography} from '@mui/material'
import {convertToGCode} from './utils/convert-to-gcode'
import {saveTotFile} from '../../utils/save-to-file'

function saveTextToFile(text: string, ext?: string) {
  const a = document.createElement('a')
  const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), text], {type: 'text/plain;charset=utf-8'})
  a.href = URL.createObjectURL(blob)
  const currentDate = new Date().toISOString().replace(/:/g, '-')
  a.download = 'my_text_' + currentDate + ext ?? '.txt'
  a.click()
  URL.revokeObjectURL(a.href)
}

function handleDirectorySelect(event: any) {
  const selectedText = prompt('Введите текст для сохранения в файл:')

  if (selectedText !== null) {
    saveTextToFile(selectedText)
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

export default function FullWidthTabs({selectedViewCommand, gcode}: any) {
  const [value, setValue] = React.useState(1)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <Box flex={1}>
      <AppBar position="static">
        <Tabs
          // style={{backgroundColor: '#262626', borderColor: '#fff'}}
          TabIndicatorProps={{
            style: {
              // backgroundColor: '#fff',
            },
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example">
          <Tab label="Out GCode" {...a11yProps(0)} />
          <Tab label="Command Details" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <Box>
            <Typography whiteSpace="pre-wrap">{gcode}</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {selectedViewCommand && <CommandDetails command={selectedViewCommand} />}
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}

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
  const [state, dispatch] = useReducer(dragReducer, initialState) // Используйте useReducer
  const [gcode, setGCode] = useState('')

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

  useEffect(() => {
    setGCode(convertToGCode(state.selectedCommands))
  }, [state.selectedCommands])

  return (
    <Box display="flex" flex={1} flexDirection="column" p={2}>
      <Box display="flex" flexDirection="row" mb={2}>
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        <Button style={{marginTop: 20}} size="large" variant="contained" onClick={() => {}}>
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
            <FullWidthTabs selectedViewCommand={selectedViewCommand} gcode={gcode} />
          </Box>
        </DragDropContext>
      </Box>
    </Box>
  )
}

export {GCodeUiConstructor}
