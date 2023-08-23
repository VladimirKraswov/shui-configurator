import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {ICommand} from '../commands'
import {Button} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {ParamOptions} from './ParamOptions'

interface IEditCommandCard {
  command: ICommand
  onClick?: () => void
  onDelete?: () => void
  onChange?: (id: string, paramName: string, value: any, isActive?: boolean) => void
}

export const EditCommandCard = ({command, onClick, onDelete, onChange}: IEditCommandCard) => {
  return (
    <Accordion onChange={onClick}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
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
      </AccordionSummary>
      <AccordionDetails>
        {command.params?.map((param) => (
          <ParamOptions key={`${command.id}${param.name}`} commandId={command.id} param={param} onChange={onChange} />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
