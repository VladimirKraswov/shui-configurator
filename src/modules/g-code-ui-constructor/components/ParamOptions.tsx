import React, {useCallback} from 'react'

import {Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from '@mui/material'

import {NumberInput} from './NumberInput'

import {IParam} from '../commands'

interface IParamOptions {
  commandId: string
  param: IParam
  onChange?: (commandId: string, paramName: string, value: any, isActive?: boolean) => void
}

export const ParamOptions = ({commandId, param, onChange}: IParamOptions) => {
  const handleChange = useCallback((value: any, isActive?: boolean) => {
    onChange?.(commandId, param.name, value, isActive)
  }, [])

  if (param.selectableValues?.length) {
    return (
      <FormControl disabled={!param.isActive} fullWidth>
        <InputLabel id="demo-simple-select-label">Материнская плата</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={param.value}
          label="Вид кинематики"
          onChange={(e) => handleChange(e.target.value)}>
          {param.selectableValues.map((selectableValue) => (
            <MenuItem key={`${param.name}${selectableValue.label}`} value={selectableValue.value}>
              {selectableValue.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }

  if (typeof param.value === 'boolean') {
    return (
      <FormControl fullWidth>
        <FormControlLabel
          required
          control={<Checkbox checked={param.value} onChange={(e, checked) => handleChange(checked)} />}
          label={param.label}
        />
      </FormControl>
    )
  }

  if (typeof param.value === 'number') {
    return (
      <Box width="100%" display="inline-flex">
        <Checkbox checked={param.isActive} onChange={(e, checked) => handleChange(checked, true)} />
        <NumberInput
          disabled={!param.isActive}
          aria-label="Demo number input"
          placeholder="Type a number…"
          value={param.value}
          min={param.min}
          max={param.max}
          //@ts-ignore
          onChange={(e, value) => handleChange(value)}
        />
      </Box>
    )
  }

  return <Box>{param.isActive}</Box>
}
