import {removeComments} from '../utils/remove-comments'
import {extractDirectoryPath} from '../utils/extract-directory-path'

export interface Parameter {
  [parameterLetter: string]: number
}

export interface ParsedCommands {
  [command: string]: Parameter[]
}

async function readGCodeFromFile(filename: string): Promise<string | null> {
  try {
    // const data = await readTextFile(filename)
    // return data
    return null
  } catch (err) {
    console.error('Ошибка при чтении файла:', err)
    return null
  }
}

async function writeGCodeFromFile(filename: string, gcode: string) {
  try {
    //await writeTextFile(filename, gcode)
  } catch (err) {
    console.error('Ошибка при записи файла:', err)
  }
}

function parseGCode(gCode: string): ParsedCommands {
  const lines = gCode.split('\n')
  const parsedCommands: ParsedCommands = {}

  lines.forEach((line) => {
    const parts = line.trim().split(/\s+/)
    if (parts.length > 0) {
      const command = parts[0]
      const parameters: Parameter[] = []

      for (let i = 1; i < parts.length; i++) {
        const parameterLetter = parts[i][0]
        const parameterValue = parseFloat(parts[i].substring(1))

        const parameter: Parameter = {[parameterLetter]: parameterValue}
        parameters.push(parameter)
      }

      if (!parsedCommands[command]) {
        parsedCommands[command] = []
      }

      parsedCommands[command].push(...parameters)
    }
  })

  return parsedCommands
}

export function getParameterValue(
  parsedCommands: ParsedCommands,
  commandName: string,
  parameterLetter: string,
): number | null {
  const command = parsedCommands[commandName]
  if (!command) {
    return null
  }

  for (const parameters of command) {
    const parameterValue = parameters[parameterLetter]
    if (parameterValue !== undefined) {
      return parameterValue
    }
  }

  return null
}

export function setParameterValue(
  parsedCommands: ParsedCommands,
  commandName: string,
  parameterLetter: string,
  newValue: number,
): ParsedCommands {
  const updatedCommands: ParsedCommands = {...parsedCommands}
  const command = updatedCommands[commandName]

  if (!command) {
    return updatedCommands
  }

  const updatedCommand = command.map((parameters) => {
    // if (parameters.hasOwnProperty(parameterLetter)) {
    //   return {...parameters, [parameterLetter]: newValue}
    // }
    // return parameters
  })

  // updatedCommands[commandName] = updatedCommand
  return updatedCommands
}

function convertObjectToString(parsedObject: any): string {
  const result = ''

  for (const index in parsedObject) {
    // if (parsedObject.hasOwnProperty(index)) {
    //   const parameters = parsedObject[index]
    //   if (parameters) {
    //     const parameterStrings = Object.keys(parameters).map((parameter) => {
    //       const p = isNaN(parameters[parameter]) ? '' : parameters[parameter]
    //       return `${parameter}${p} `
    //     })
    //     result += `${parameterStrings}`
    //   }
    // }
  }

  return result
}

export async function loadConfig(fileName: string): Promise<ParsedCommands | null> {
  try {
    const gcodeData = await readGCodeFromFile(fileName)
    if (gcodeData) {
      return parseGCode(removeComments(gcodeData))
    }

    return null
  } catch (error) {
    return null
  }
}

export async function saveConfig(parsedCommands: ParsedCommands, filePath: string) {
  let gCodeContent = ''

  const directoryPath = extractDirectoryPath(filePath)
  if (directoryPath) {
    //const isExists = await exists(directoryPath)

    // if (!isExists) {
    //await createDir(directoryPath, {recursive: true})
    // }

    for (const command in parsedCommands) {
      gCodeContent += `${command} ${convertObjectToString(parsedCommands[command])}\n`
    }

    gCodeContent = gCodeContent.replace('M0 S2 R', 'M0 S2 Restored')

    await writeGCodeFromFile(filePath, gCodeContent)
  }
}
