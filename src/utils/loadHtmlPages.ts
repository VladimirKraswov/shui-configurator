import axios from 'axios'
import {ICommand, IParam} from './GCodeParser'
import {saveTextToFile} from './saveTextToFile'

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function loadHtmlPages(urls: string[]): Promise<string[]> {
  const htmlPages: string[] = []

  for (const url of urls) {
    try {
      const response = await axios.get(url)
      if (response.status === 200 && response.data) {
        htmlPages.push(response.data)
        console.log(`Loaded HTML from ${url}`)
      } else {
        console.log(`Failed to load HTML from ${url}`)
      }
    } catch (error) {
      // @ts-ignore
      console.error(`Error loading HTML from ${url}: ${error.message}`)
    }
  }

  return htmlPages
}

export async function getCommandsInfoWithMarlinSite(commands: ICommand[]) {
  console.log('Start parse....')
  const newCommands: ICommand[] = []

  for (const cmd of commands) {
    console.log('Command', cmd.name)
    delete cmd.description
    delete cmd.details?.text
    const url = cmd.details?.url
    try {
      if (url && cmd.name) {
        const response = await axios.get(url)
        if (response.status === 200 && response.data) {
          const html = response.data
          const parser = new DOMParser()
          const doc = parser.parseFromString(html, 'text/html')

          const details = {
            // @ts-ignore
            description: doc.getElementsByClassName('col-lg-12 row long')?.[0]?.innerText,
            // @ts-ignore
            notes: doc.getElementsByClassName('col-lg-12 row notes')?.[0]?.innerText,
            url: cmd.details?.url,
          }
          const params = []

          const table = doc.getElementsByClassName('table')
          const tableRows = table[0]?.getElementsByTagName('tr') ?? []

          for (let i = 0; i < tableRows.length; i++) {
            const row = tableRows[i]
            const rowText = row.innerText
            const param: IParam = {
              name: rowText.split('    ')[0].replace(/\s/g, '').charAt(1),
              label: rowText.split('    ')[0].replace(/\s/g, ''),
              hint: rowText.split('    ')[1],
              value: 0,
            }
            params.push(param)
          }

          newCommands.push({
            ...cmd,
            details,
            params,
          })
        } else {
          newCommands.push({
            ...cmd,
          })
        }
      }
      console.log('Finish')
    } catch (error) {
      // @ts-ignore
      console.error(`Error loading HTML from ${url}: ${error.message}`)
    }
    await delay(300)
  }
  saveTextToFile(JSON.stringify(newCommands, null, 2), 'cmd')
}
