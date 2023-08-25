import React, {forwardRef} from 'react'

import {useForkRef} from '@mui/material'

import styled from '@emotion/styled'
import {useNumberInput} from '@mui/base/unstable_useNumberInput/useNumberInput'
import {UseNumberInputParameters} from '@mui/base'
import {COLORS} from '../../../theme/colors'

export const NumberInput = forwardRef(function CustomNumberInput(
  props: UseNumberInputParameters & React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {getRootProps, getInputProps, getIncrementButtonProps, getDecrementButtonProps, focused} = useNumberInput(props)

  const inputProps = getInputProps()

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref)

  return (
    <StyledInputRoot {...getRootProps()} className={focused ? 'focused' : null}>
      <StyledStepperButton {...getIncrementButtonProps()} className="increment">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" fill="currentColor" />
        </svg>
      </StyledStepperButton>
      <StyledStepperButton {...getDecrementButtonProps()} className="decrement">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor" />
        </svg>
      </StyledStepperButton>
      <StyledInputElement {...inputProps} />
    </StyledInputRoot>
  )
})

const StyledInputRoot: React.ElementType = styled('div')(
  ({theme}) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;

    display: grid;
    grid-template-columns: 24px 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 8px;
    padding: 6px;

    border-radius: 6px;
    border-style: solid;
    border-width: 1px;

    color: ${theme.palette.mode === 'dark' ? COLORS.grey[300] : COLORS.grey[900]};
    background: ${theme.palette.mode === 'dark' ? COLORS.grey[900] : COLORS.grey[50]};

    border-color: ${theme.palette.mode === 'dark' ? COLORS.grey[700] : COLORS.grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? COLORS.grey[900] : COLORS.grey[50]};

    &.focused {
      border-color: ${COLORS.blue[400]};
      box-shadow:
        inset 0 0 0 1px ${COLORS.blue[400]},
        0px 2px 2px ${theme.palette.mode === 'dark' ? COLORS.grey[900] : COLORS.grey[50]};

      & button:hover {
        background: ${COLORS.blue[400]};
      }
    }
  `,
)

const StyledInputElement = styled('input')`
  grid-column: 2/3;
  grid-row: 1/3;
  background: none;
  border: 0;
  outline: 0;
  padding: 0;
`

const StyledStepperButton = styled('button')(
  ({theme}) => `
    width: 1.5rem;
    height: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    box-sizing: border-box;
    border: 0;
    padding: 0;

    & > svg {
      transform: scale(0.8);
    }

    &.increment,
    &.decrement {
      &:hover {
        cursor: pointer;
        background: ${COLORS.blue[400]};
        color: ${COLORS.grey[50]};
      }

      background: ${COLORS.grey[600]};
      color: ${COLORS.grey[200]};
    }

    &.increment {
      grid-column: 1/2;
      grid-row: 1/2;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &.decrement {
      grid-column: 1/2;
      grid-row: 2/3;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `,
)
