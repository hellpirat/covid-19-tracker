import { request } from '../lib/request'

/**]
 *
 * @return {Promise<any|number>}
 */
export const getLatest = async () => await request('summary/latest/')
