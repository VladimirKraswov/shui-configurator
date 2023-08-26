import {ICommand} from './types'

export const commandsToGCode = (commands: ICommand[]) => {
  let result = ''

  commands?.forEach((command) => {
    result += command.name
    command.params?.forEach((param) => {
      if (typeof param.value === 'boolean' && param.value) {
        result += ` ${param.name}`
      } else if (typeof param.value !== 'boolean' && param.isActive) {
        result += ` ${param.name}${param.value}`
      }
    })
    result += '\n'
  })

  return result
}
