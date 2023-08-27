import React, {Fragment} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {ICommand} from '../../../utils/GCodeParser'

interface ICommandDetails {
  command?: ICommand | null
}

export const CommandDetails = ({command}: ICommandDetails) => {
  if (!command) {
    return null
  }

  return (
    <Box height="100%" flexDirection="column" justifyContent="space-between">
      <Box
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: '75vh',
        }}>
        <Typography variant="h4">{command.name}</Typography>
        {!!command.details?.description && (
          <Box mt={2}>
            <Typography variant="h6">Description</Typography>
            <Typography whiteSpace="pre-wrap">{command.details?.description}</Typography>
          </Box>
        )}
        {!!command.details?.notes && (
          <Box mt={2}>
            <Typography variant="h6">Notes</Typography>
            <Typography whiteSpace="pre-wrap">{command.details?.notes}</Typography>
          </Box>
        )}
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
