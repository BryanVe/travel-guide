export const formatDate = (dateAsString: string) => {
  const date = new Date(dateAsString)
  const day = (date.getDate() + 1).toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

// export const padZero = (number: number) => {
// if (number)
// }
