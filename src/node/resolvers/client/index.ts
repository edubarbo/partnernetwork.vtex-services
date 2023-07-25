// Dependencies
import { omit } from 'lodash'

// Typing
import { IClient } from './../../typings/client'

// Utils
import { getAttachmentURL } from '../../utils/getAttachmentURL'

interface Args {
  id: IClient['id']
}

export const client = async (_: any, { id }: Args, ctx: Context) => {
  const document = await ctx.clients.masterdata.getDocument<IClient>({
    id,
    dataEntity: 'PC',
    fields: [
      'id',
      'name',
      'imgFile',
      'partnerID',
      'isActive',
      'isRemoved',
      'description',
      'accountName',
    ],
  })

  if (document) {
    const documentWithoutImgFile = omit(document, ['imgFile'])

    const [fileName] = (document.imgFile || '')
      .split(',')
      .filter((name) => name !== '{}')

    return {
      ...documentWithoutImgFile,
      imgURL: getAttachmentURL({
        fileName,
        field: 'imgFile',
        dataEntity: 'PC',
        id: document.id,
        host: ctx.vtex.host as string,
      }),
    }
  }

  return document
}
