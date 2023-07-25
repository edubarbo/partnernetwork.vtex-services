// Dependencies
import FormData from 'form-data'
import {
  MasterData,
  InstanceOptions,
  IOContext,
  RequestTracingConfig,
  RequestConfig
} from '@vtex/api'

import { statusToError } from '../../utils/errors'

// Typing
import type { ReadStream } from 'fs'

export interface SaveAttachmentInput {
  id: string
  field: string
  dataEntity: string
  file: ReadStream
}

export default class MasterDataV1 extends MasterData {
  public constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, options)
  }

  public saveAttachment(
    { id, file, field, dataEntity }: SaveAttachmentInput,
    tracingConfig?: RequestTracingConfig
  ) {
    const metric = 'masterdata-saveAttachment'

    const formData = new FormData()

    formData.append('file', file)

    return this.http.post(
      `${dataEntity}/documents/${id}/${field}/attachments`,
      formData,
      {
        metric,
        headers: formData.getHeaders(),
        tracing: {
          requestSpanNameSuffix: metric,
          ...tracingConfig?.tracing,
        },
      }
    )
  }

  public getPartnerByName = (partnerName: string, config: RequestConfig = {}) => {
    const { segmentToken, authToken } = this.context
    const segmentTokenCookie = segmentToken
      ? `vtex_segment=${segmentToken};`
      : ''

      const authCookie = authToken
      ? `VtexIdclientAutCookie=${authToken}`
      : ''

    config.headers = {
      ...config.headers,
      ...this.options?.headers,
      Cookie: `${segmentTokenCookie}${authCookie}`,
    }

    return this.http.get<{ email: string }[]>(
      `/PN/search?_fields=email&_where=name="${encodeURI(partnerName)}"`,
      config
    ).catch(statusToError)
  }
}
