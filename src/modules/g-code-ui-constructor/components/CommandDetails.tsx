import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import {ICommand} from '../commands'

interface ICommandDetails {
  command: ICommand
}

export const CommandDetails = ({command}: ICommandDetails) => {
  return (
    <Box display="flex" flexDirection="column" color="#fff" justifyContent="space-between">
      <Box
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
        }}>
        <Typography variant="h4">{command.name}</Typography>
        <Typography>{command.details?.text}</Typography>
      </Box>
      <Box display="flex" flexDirection="row" width="100%" justifyContent="flex-end">
        {!!command.details?.url && (
          <a href={command.details?.url} target="_blank" rel="noreferrer">
            Документация
          </a>
        )}
      </Box>
    </Box>
  )
}
