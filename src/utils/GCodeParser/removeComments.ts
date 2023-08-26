export function removeComments(input: string): string {
  const lines = input.split('\n')
  const resultLines = lines.map((line) => line.replace(/;.*$/, '').trim())
  return resultLines.join('\n')
}
