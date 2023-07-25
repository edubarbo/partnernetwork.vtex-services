// Dependencies
import { omit } from 'lodash'

// Typing
import { IPartner } from '../../typings/partner'

// Utils
import { getAttachmentURL } from '../getAttachmentURL'

interface ResponsePartner extends Omit<IPartner, 'imgFile'> {
  imgURL: string
}

interface GetPartnerById {
  (id: IPartner['id'], ctx: Context | CustomEventContext): Promise<
    ResponsePartner | undefined
  >
}

export const getPartnerById: GetPartnerById = async (id, ctx) => {
  const document = await ctx.clients.masterdata.getDocument<IPartner>({
    id,
    dataEntity: 'PN',
    fields: ['_all'],
  })

  if (document) {
    const documentWithoutImgFile = omit(document, ['imgFile'])

    const [fileName] = (document.imgFile || '')
      .split(',')
      .filter((name) => name !== '{}')

    const host = ctx.vtex.host ?? 'partnernetwork.myvtex.com'
    
    return {
      ...documentWithoutImgFile,
      imgURL: getAttachmentURL({
        host,
        fileName,
        field: 'imgFile',
        dataEntity: 'PN',
        id: document.id,
      }),
    }
  }

  return document
}
