/**
 *
 * @param {string} isoString
 * @return {string}
 */
export const formatDate = isoString => {
  const date = new Date(isoString)
  const locale = 'en-US'
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  const result = new Intl.DateTimeFormat(locale, options).format(date)
  return result
}
