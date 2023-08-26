import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Button} from '@mui/material'
import {COLORS} from '../../../theme/colors'
import {ICommand} from '../../../utils/GCodeParser'

interface ICommandCard {
  command: ICommand
  onClick?: () => void
  onAdd?: () => void
}

export const CommandCard = ({command, onClick, onAdd, ...rest}: ICommandCard) => {
  return (
    <Box
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#606065',
        backgroundColor: COLORS.grey[100],
        borderWidth: 1,
        padding: 10,
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
      justifyContent="space-between"
      onClick={onClick}
      {...rest}>
      <Box display="flex" alignItems="center">
        <Typography variant="h6" mr={1}>
          {command.name}
        </Typography>
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
