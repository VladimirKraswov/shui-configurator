import React, {useCallback, useReducer, useState} from 'react'

import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {TCommand, commands} from './commands'
import {Button} from '@mui/material'

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
    default:
      return state
  }
}

interface ICommandCard {
  style?: any
  command: TCommand
  onClick?: () => void
  onAdd?: () => void
  onDelete?: () => void
}

const CommandCard = ({style, command, onClick, onAdd, onDelete, ...rest}: ICommandCard) => {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#606065',
        color: '#fff',
        padding: 10,
        cursor: 'pointer',
      }}
      justifyContent="space-between"
      onClick={onClick}
      {...rest}>
      <Box display="flex" alignItems="center">
        <Typography mr={1}>{command.name}</Typography>
        {'-'}
        <Typography ml={1}>{command.description}</Typography>
      </Box>
      <Button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          onAdd?.()
        }}>
        <Typography variant="h5">+</Typography>
      </Button>
    </Box>
  )
}

const EditCommandCard = ({style, command, onClick, onAdd, onDelete, ...rest}: ICommandCard) => {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#606065',
        color: '#fff',
        padding: 10,
      }}
      justifyContent="space-between"
      onClick={onClick}
      {...rest}>
      <Box display="flex" alignItems="center">
        <Typography mr={1}>{command.name}</Typography>
        {'-'}
        <Typography ml={1}>{command.description}</Typography>
      </Box>
      <Button
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          e.nativeEvent.stopImmediatePropagation()
          onDelete?.()
        }}>
        <Typography variant="h5">-</Typography>
      </Button>
    </Box>
  )
}

interface IDetails {
  command: TCommand
}

const Details = ({command}: IDetails) => {
  return (
    <Box display="flex" flexDirection="column" color="#fff" justifyContent="space-between">
      <Box
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
        }}>
        <Typography variant="h4">{command.name}</Typography>
        <Typography>{command.details}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" width="100%" justifyContent="flex-end">
        {!!command.url && (
          <a href={command.url} target="_blank" rel="noreferrer">
            Документация
          </a>
        )}
      </Box>
    </Box>
  )
}

const GCodeUiConstructor = () => {
  const [selectedViewCommand, setSelectedViewCommand] = useState<TCommand | null>(null)
  const [state, dispatch] = useReducer(dragReducer, initialState) // Используйте useReducer

  const addCommand = useCallback(
    (command: TCommand) => () => {
      dispatch({type: 'ADD_COMMAND', payload: command})
    },
    [],
  )

  const deleteCommand = useCallback(
    (command: TCommand) => () => {
      console.log(command)

      dispatch({type: 'DELETE_COMMAND', payload: command})
    },
    [],
  )

  console.log(state)

  const onDragEnd = useCallback((result: any) => {
    if (!result.destination) {
      return
    }
    dispatch({
      type: 'REORDER_COMMANDS',
      payload: {sourceIndex: result.source.index, destinationIndex: result.destination.index},
    })
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
        {commands.map((command: TCommand, index) => (
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
              {state.selectedCommands.map((command: TCommand, index: number) => (
                <Draggable draggableId={`${command.name}${index}`} key={`${command.name}${index}`} index={index}>
                  {(provided) => (
                    <Box
                      mb={index < state.selectedCommands.length ? 1 : 0}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <EditCommandCard key={command.name} command={command} onDelete={deleteCommand(command)} />
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
          {selectedViewCommand && <Details command={selectedViewCommand} />}
        </Box>
      </DragDropContext>
    </Box>
  )
}

export {GCodeUiConstructor}
