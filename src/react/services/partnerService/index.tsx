// Dependencies
import axios from 'axios'

const PARTNER_ENTITY_NAME = 'PN'

const masterDataAPI = axios.create({
  baseURL: '/api/dataentities',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.vtex.ds.v10+json',
  },
})

export const getPartners = (
  fields: string[],
  size = 10,
  filters?: string[]
) => {
  const params = new URLSearchParams()

  params.append('_size', size.toString())
  params.append('_fields', fields.toString())

  if (filters) {
    filters.forEach(filter => {
      const [key, value] = filter.split('=')

      params.append(key, value)
    })
  }

  return masterDataAPI.get(`/${PARTNER_ENTITY_NAME}/search?${params}`)
}
