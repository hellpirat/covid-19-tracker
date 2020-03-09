/**
 * @param number
 * @return {string}
 */
export const formatNumber = (number) => new Intl.NumberFormat().format(number)
