// Объединить дубликаты
export function mergeObjectsWithSameName(arr: any[]): any[] {
  const mergedMap: Record<string, any> = {}

  for (const item of arr) {
    if (item.name in mergedMap) {
      // Объединяем свойства объектов с одинаковым именем
      mergedMap[item.name] = {...mergedMap[item.name], ...item}
    } else {
      mergedMap[item.name] = item
    }
  }

  return Object.values(mergedMap)
}
