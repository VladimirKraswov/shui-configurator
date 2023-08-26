export function saveTextToFile(text: string, ext?: string) {
  const a = document.createElement('a')
  const blob = new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), text], {type: 'text/plain;charset=utf-8'})
  a.href = URL.createObjectURL(blob)
  const currentDate = new Date().toISOString().replace(/:/g, '-')
  a.download = 'my_text_' + currentDate + ext ?? '.txt'
  a.click()
  URL.revokeObjectURL(a.href)
}
