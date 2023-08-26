import {gcodeToIntermediateCommands} from './gcodeToIntermediateCommands'
import {removeComments} from './removeComments'
import {ICommand} from './types'

const getValue = (value: any) => {
  if (!value) {
    return false
  }
  if (typeof value === 'number') {
    return 0
  }
}

export function gcodeToCommands(gcode: string): ICommand[] {
  const parseGCode = gcodeToIntermediateCommands(removeComments(gcode))

  const commands: any = []
  for (const key in parseGCode) {
    console.log(key)
    commands.push({
      id: key,
      name: key,
      description: '?',
      details: {
        text: '?',
      },
      params: parseGCode[key].map((p: any) => ({
        name: Object.keys(p)[0],
        label: '?',
        description: '',
        hint: '?',
        value: getValue(Object.values(p)[0]),
      })),
      isNotDuplicate: true,
    })
  }

  return commands

  // saveTextToFile(JSON.stringify(commands, null, 2), 'cmd')
}
