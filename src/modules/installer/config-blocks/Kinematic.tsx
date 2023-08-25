import React, {useMemo} from 'react'
import {Box, FormControl, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material'

import {ParsedCommands, getParameterValue} from '../gcode-parse'
import {Hint} from '../../../components/Hint'
interface IKinematicBlock {
  config: ParsedCommands
  onChangeConfig: (commandName: string, parameterLetter: string, newValue: number) => void
}

function KinematicBlock({config, onChangeConfig}: IKinematicBlock) {
  const kinematic = useMemo(() => (config ? getParameterValue(config, 'M2001', 'K') : 0), [config])
  const printAreaMinX = useMemo(() => (config ? getParameterValue(config, 'M2000.0', 'X') : 0), [config])
  const printAreaMinY = useMemo(() => (config ? getParameterValue(config, 'M2000.0', 'Y') : 0), [config])
  const printAreaMinZ = useMemo(() => (config ? getParameterValue(config, 'M2000.0', 'Z') : 0), [config])
  const printAreaMaxX = useMemo(() => (config ? getParameterValue(config, 'M2000.1', 'X') : 0), [config])
  const printAreaMaxY = useMemo(() => (config ? getParameterValue(config, 'M2000.1', 'Y') : 0), [config])
  const printAreaMaxZ = useMemo(() => (config ? getParameterValue(config, 'M2000.1', 'Z') : 0), [config])

  function changeKinematic(event: SelectChangeEvent<number | null>) {
    onChangeConfig('M2001', 'K', event.target.value as number)
  }

  function changePrintAreaMinX(event: any) {
    onChangeConfig('M2000.0', 'X', Number(event.target.value))
  }

  function changePrintAreaMinY(event: any) {
    onChangeConfig('M2000.0', 'Y', Number(event.target.value))
  }

  function changePrintAreaMinZ(event: any) {
    onChangeConfig('M2000.0', 'Z', Number(event.target.value))
  }

  function changePrintAreaMaxX(event: any) {
    onChangeConfig('M2000.1', 'X', Number(event.target.value))
  }

  function changePrintAreaMaxY(event: any) {
    onChangeConfig('M2000.1', 'Y', Number(event.target.value))
  }

  function changePrintAreaMaxZ(event: any) {
    onChangeConfig('M2000.1', 'Z', Number(event.target.value))
  }

  return (
    <FormControl>
      <Hint
        sx={{m: 1}}
        arrow
        title={`Кинематика XYZ: Использует два независимых двигателя на осях X и Y. Подходит для начинающих.
        Кинематика CoreXY: Использует два независимых двигателя на осях X и Y.
        Кинематика CoreXZ: Использует два независимых двигателя на осях X и Z.
        Принтеры Markforged: Используют усиленные материалы, такие как углепластик и стеклопластик.
        Принтер Markforged M: Применяются в промышленности для производства функциональных металлических деталей.
      `}>
        <InputLabel id="demo-simple-select-label">Тип кинематики</InputLabel>
      </Hint>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={kinematic}
        label="Вид кинематики"
        onChange={changeKinematic}>
        <MenuItem value={0}>XYZ</MenuItem>
        <MenuItem value={1}>CoreXY</MenuItem>
        <MenuItem value={4}>CoreXZ</MenuItem>
        <MenuItem value={2}>Markforged</MenuItem>
        <MenuItem value={3}>Markforged M</MenuItem>
      </Select>

      <Box paddingY="1rem">
        <FormLabel id="demo-radio-buttons-group-label">Область печати</FormLabel>
        <Box paddingY="1rem" display="flex" flexDirection="row">
          <TextField
            required
            id="outlined-required"
            label="X Mин."
            defaultValue={printAreaMinX}
            onChange={changePrintAreaMinX}
          />
          <Box width="1rem" />
          <TextField
            required
            id="outlined-required"
            label="X Макс."
            defaultValue={printAreaMaxX}
            onChange={changePrintAreaMaxX}
          />
        </Box>
        <Box paddingY="1rem" display="flex" flexDirection="row">
          <TextField
            required
            id="outlined-required"
            label="Y Mин."
            defaultValue={printAreaMinY}
            onChange={changePrintAreaMinY}
          />
          <Box width="1rem" />
          <TextField
            required
            id="outlined-required"
            label="Y Макс."
            defaultValue={printAreaMaxY}
            onChange={changePrintAreaMaxY}
          />
        </Box>
        <Box paddingY="1rem" display="flex" flexDirection="row">
          <TextField
            required
            id="outlined-required"
            label="Z Mин."
            defaultValue={printAreaMinZ}
            onChange={changePrintAreaMinZ}
          />
          <Box width="1rem" />
          <TextField
            required
            id="outlined-required"
            label="Z Макс."
            defaultValue={printAreaMaxZ}
            onChange={changePrintAreaMaxZ}
          />
        </Box>
      </Box>
    </FormControl>
  )
}

export {KinematicBlock}
