import { CONFIG } from '../config'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response.json()
  throw error
}

const getOptions = async (method, body) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  return options
}

/**
 * Fetch request
 * @param endpoint
 * @param {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} method
 * @param body
 * @return {Promise<null|any|number>}
 */
export const request = async (endpoint, method = 'GET', body) => {
  const options = await getOptions(method, body)

  try {
    const response = await fetch(`${CONFIG.API_ROOT}/${endpoint}`, options)
    checkStatus(response)
    if (response.status === 204) {
      return null
    }

    if (method === 'DELETE') {
      return response.status
    }

    return response.json()
  } catch (err) {
    throw err
  }
}
