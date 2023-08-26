import {ICommand} from './types'

export const commandsToGCode = (commands: ICommand[]) => {
  let result = ''

  commands?.forEach((command) => {
    result += command.name
    command.params?.forEach((param) => {
      if (param.isActive) {
        result += ` ${param.name}${param.value}`
      }

      if (typeof param.value === 'boolean' && param.value) {
        result += ` ${param.name}`
      }
    })
    result += '\n'
  })

  return result
}
