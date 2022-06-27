export const formatDate = (dateAsString: string) => {
  const date = new Date(dateAsString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${day}/${month}/${year} - ${hours}:${minutes}`
}
