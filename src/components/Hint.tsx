import React from 'react'

import styled from '@emotion/styled'
import {Tooltip, TooltipProps, tooltipClasses} from '@mui/material'

export const Hint = styled(({className, ...props}: TooltipProps) => (
  <Tooltip {...props} classes={{popper: className}} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 800,
    fontSize: '14px',
    backgroundColor: '#0d1116',
    color: '#eaeaeb',
    whiteSpace: 'pre-line',
  },
})
