export const capitalize = (text: string) => {
  const firstLetter = text.slice(0, 1)
  const rest = text.slice(1)

  return `${firstLetter.toUpperCase()}${rest}`
}

export const cleanText = (text: string) => {
  return text.replace(/\[[0-9]+\]/g, '')
}

export const sliceText = (text: string, limit: number) => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text
}
