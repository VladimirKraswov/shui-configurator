import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {ICommand} from '../commands'
import {Button} from '@mui/material'

interface ICommandCard {
  style?: any
  command: ICommand
  onClick?: () => void
  onAdd?: () => void
}

export const CommandCard = ({style, command, onClick, onAdd, ...rest}: ICommandCard) => {
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
