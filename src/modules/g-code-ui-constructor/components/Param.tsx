import React, {useCallback} from 'react'

import {Box, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select} from '@mui/material'

import {NumberInput} from './NumberInput'

import {Hint} from '../../../components/Hint'
import {IParam} from '../../../utils/GCodeParser'

interface IParamOptions {
  commandId: string
  param: IParam
  onChange?: (commandId: string, paramName: string, value: any, isActive?: boolean) => void
}

export const Param = ({commandId, param, onChange}: IParamOptions) => {
  const handleChange = useCallback((value: any, isActive?: boolean) => {
    onChange?.(commandId, param.name, value, isActive)
  }, [])

  if (param.selectableValues?.length) {
    return (
      <FormControl disabled={!param.isActive} fullWidth>
        <Hint title={param.hint}>
          <InputLabel id="demo-simple-select-label">{param.label}</InputLabel>
        </Hint>

        <Select
          style={{backgroundColor: 'white'}}
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
        <Hint title={param.hint}>
          <FormControlLabel
            required
            control={<Checkbox checked={param.value} onChange={(e, checked) => handleChange(checked)} />}
            label={param.label}
          />
        </Hint>
      </FormControl>
    )
  }

  if (typeof param.value === 'number') {
    return (
      <Box>
        <Hint title={param.hint}>
          <InputLabel>{param.label}</InputLabel>
        </Hint>

        <Box display="inline-flex">
          <Checkbox
            style={{padding: 0, marginRight: 10}}
            checked={param.isActive}
            onChange={(e, checked) => handleChange(checked, true)}
          />
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
      </Box>
    )
  }

  return null
}
