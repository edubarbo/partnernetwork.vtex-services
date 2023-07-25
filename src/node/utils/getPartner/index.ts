// Dependencies
import { omit } from 'lodash'

// Typing
import { IPartner } from '../../typings/partner'

// Utils
import { getAttachmentURL } from '../getAttachmentURL'

interface GetPartner {
  (account: IPartner['account'], ctx: Context): Promise<
    Omit<IPartner, 'imgFile'> | undefined
  >
}

export const getPartner: GetPartner = async (account, ctx) => {
  const [document] = await ctx.clients.masterdata.searchDocuments<IPartner>({
    dataEntity: 'PN',
    fields: [
      'id',
      'name',
      'email',
      'imgFile',
      'status',
      'account',
      'website',
      'description',
      'types',
      'regions',
      'categories',
      'subcategories',
    ],
    where: `account=${account}`,
    pagination: {
      page: 1,
      pageSize: 1,
    },
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
        dataEntity: 'PN',
        id: document.id,
        host: ctx.vtex.host as string,
      }),
    }
  }

  return document
}
