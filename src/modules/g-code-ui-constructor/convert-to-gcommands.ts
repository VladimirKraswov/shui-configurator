import {ICommand} from './commands'

export const convertToGCode = (commands: ICommand[]) => {
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
