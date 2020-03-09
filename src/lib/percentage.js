/**
 * @param {number} value
 * @param {number} total
 * @param {number} percentage
 * @return {number}
 */
// prettier-ignore
export const getPercentage = (value, total, percentage = 100) => Math.round(value * percentage / total)
