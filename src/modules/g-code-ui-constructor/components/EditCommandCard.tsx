import React, {Fragment} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {ICommand} from '../commands'
import {Button} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Param} from './Param'
import {COLORS} from '../../../theme/colors'

interface IEditCommandCard {
  command: ICommand
  onClick?: () => void
  onDelete?: () => void
  onChange?: (id: string, paramName: string, value: any, isActive?: boolean) => void
}

export const EditCommandCard = ({command, onClick, onDelete, onChange}: IEditCommandCard) => {
  return (
    <Accordion
      style={{
        backgroundColor: COLORS.grey[100],
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      }}
      onChange={onClick}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Box style={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
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
      </AccordionSummary>
      <AccordionDetails>
        {command.params?.map((param, index) => (
          <Fragment key={`${command.id}${param.name}`}>
            <Param commandId={command.id} param={param} onChange={onChange} />
            {/* @ts-ignore */}
            {command.params.length > 1 && index < command.params.length - 1 && (
              <Box width="100%" mt={1} mb={1} height={2} bgcolor={COLORS.grey[200]} />
            )}
          </Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
