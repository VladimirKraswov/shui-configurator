export interface IIntermediateParameter {
  name: string
  value: any
}

export interface IIntermediateCommands {
  [command: string]: IIntermediateParameter[]
}

export function gcodeToIntermediateCommands(gCode: string): IIntermediateCommands {
  const lines = gCode.split('\n')
  const commands: IIntermediateCommands = {}

  lines.forEach((line) => {
    const parts = line.trim().split(/\s+/)
    if (parts.length > 0) {
      const command = parts[0]
      const parameters: IIntermediateParameter[] = []

      for (let i = 1; i < parts.length; i++) {
        const parameterName = parts[i][0]
        const parameterValue = parseFloat(parts[i].substring(1))

        const parameter: IIntermediateParameter = {name: parameterName, value: parameterValue ?? true}
        parameters.push(parameter)
      }

      if (!commands[command]) {
        commands[command] = []
      }

      commands[command].push(...parameters)
    }
  })

  return commands
}
