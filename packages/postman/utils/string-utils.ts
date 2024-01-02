export function camelToSnake(str: string) {
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`)
}

export const snakeToTitleCase = (str) => {
  const words = str.split('_')
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return capitalizedWords.join(' ')
}
