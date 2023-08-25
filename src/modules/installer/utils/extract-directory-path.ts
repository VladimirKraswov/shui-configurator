export function extractDirectoryPath(fullPath: string) {
  try {
    const parts = fullPath.split('/')
    parts.pop() // Удаляем имя файла
    const directoryPath = parts.join('/')
    return directoryPath
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
