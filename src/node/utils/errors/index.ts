import type { AxiosError } from 'axios'
import { AuthenticationError, ForbiddenError, UserInputError } from '@vtex/api'

interface CreateOrUpdateSchemaResponse {
  Message: string
}

export const throwIfNotModified = (error: AxiosError) => {
  // 304 means document was not updated therefore we do not treat as an error
  if (error.response?.status !== 304) throw error
}

export const returnDocumentIdOrTrhow = (error: AxiosError) => {
  throwIfNotModified(error)

  return error.response?.headers?.['x-vtex-document-id'] ?? ''
}

export const returnMessageOrThrow = (
  error: AxiosError
): CreateOrUpdateSchemaResponse => {
  throwIfNotModified(error)

  return { Message: 'Not Modified' }
}

export const returnDataIfConflictOrThrow = (data: any) => (
  error: AxiosError
) => {
  // If SKU already exists catalog API will return 409
  if (error.response?.status === 409) return data
  throw error
}

export const statusToError = (e: any) => {
  if (!e.response) throw e

  const { response } = e as AxiosError
  const { status } = response!

  if (status === 401) {
    throw new AuthenticationError(e)
  }

  if (status === 403) {
    throw new ForbiddenError(e)
  }

  if (status === 400) {
    throw new UserInputError(e)
  }

  throw e
}
