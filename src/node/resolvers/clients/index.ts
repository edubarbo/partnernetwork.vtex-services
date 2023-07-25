// Dependencies
import { omit } from 'lodash'

// Typing
import { IClient } from '../../typings/client'

// Utils
import { getAttachmentURL } from '../../utils/getAttachmentURL'

interface Args {
  partnerID: IClient['partnerID']
}

export const clients = async (_: any, { partnerID }: Args, ctx: Context) => {
  const documents = await ctx.clients.masterdata.searchDocuments<IClient>({
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
    where: `(partnerID=${partnerID} AND isRemoved=false)`,
    pagination: {
      page: 1,
      pageSize: 5,
    },
  })

  return documents.map((document) => {
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
  })
}
