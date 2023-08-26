import * as uuid from 'uuid'

import {gcodeToIntermediateCommands} from './gcodeToIntermediateCommands'
import {removeComments} from './removeComments'
import {ICommand, IParam} from './types'
import {commands} from './commands'

const getValue = (value: any): any => {
  if (typeof value === 'number' && !Number.isNaN(value) && Number.isFinite(value)) {
    return value
  }
  return true
}

export function gcodeToCommands(gcode: string): ICommand[] {
  const parseGCode = gcodeToIntermediateCommands(removeComments(gcode))
  const newCommands: ICommand[] = []

  for (const key in parseGCode) {
    const command = commands.find((cmd) => cmd.name === key)
    if (command) {
      newCommands.push({
        ...command,
        id: uuid.v4(),
        params: command.params?.map((param: IParam) => {
          const findParam = parseGCode[key].find((p) => p.name === param.name)
          if (findParam) {
            return {
              ...param,
              value: getValue(findParam.value),
              isActive: true,
            }
          }
          return param
        }),
        isNotDuplicate: true,
      })
    }
  }

  console.log(newCommands)

  return newCommands

  // saveTextToFile(JSON.stringify(commands, null, 2), 'cmd')
}
