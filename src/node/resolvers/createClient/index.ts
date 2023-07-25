// Dependencies
import os from 'os'
import path from 'path'
import { omit } from 'lodash'

// Typing
import { IPartner } from '../../typings/partner'
import { IClient } from '../../typings/client'

// Utils
import { getAttachmentURL } from '../../utils/getAttachmentURL'

interface Args {
  partnerID: IPartner['id']
  input: Omit<IClient, 'id' | 'partnerID' | 'imgFile'> & {
    imgFile: Promise<File>
  }
}

const saveAttachment = async (
  ctx: Context,
  input: Args['input'],
  id: string
) => {
  const { name } = input

  const { createReadStream, filename, encoding, mimetype } = await input.imgFile

  const saveTo = path.join(os.tmpdir(), path.basename(filename))

  const stream = createReadStream(saveTo)

  const [, ext] = filename.split('.')

  const nameFriendly = name.toLowerCase().replace(/[\s]+/g, '-')

  //@ts-ignore
  stream.fieldname = 'file' + Math.random().toString(16).substring(2)

  //@ts-ignore
  stream.name = stream.filename = `${nameFriendly}.${ext}`
  //@ts-ignore
  stream.transferEncoding = stream.encoding = encoding
  //@ts-ignore
  stream.mimeType = stream.mime = mimetype
  //@ts-ignore
  stream.mimeType = stream.mime = mimetype
  //@ts-ignore
  stream.path = saveTo

  await ctx.clients.masterDataV1.saveAttachment({
    id,
    dataEntity: 'PC',
    field: 'imgFile',
    file: stream,
  })
}

export const createClient = async (
  _: any,
  { partnerID, input }: Args,
  ctx: Context
) => {
  const { name, isActive, description } = input

  await ctx.clients.masterdata.updatePartialDocument({
    id: partnerID,
    dataEntity: 'PN',
    fields: {
      status: 'PENDING',
    },
  })

  const newDocument = await ctx.clients.masterdata.createDocument({
    dataEntity: 'PC',
    fields: {
      name,
      isActive,
      partnerID,
      description,
      isRemoved: false,
    },
  })

  await saveAttachment(ctx, input, newDocument.DocumentId)

  const clientDocument = await ctx.clients.masterdata.getDocument<IClient>({
    dataEntity: 'PC',
    id: newDocument.DocumentId,
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

  const documentWithoutImgFile = omit(clientDocument, ['imgFile'])

  const [fileName] = (clientDocument.imgFile || '')
    .split(',')
    .filter((name) => name !== '{}')

  return {
    ...documentWithoutImgFile,
    imgURL: getAttachmentURL({
      fileName,
      field: 'imgFile',
      dataEntity: 'PC',
      id: clientDocument.id,
      host: ctx.vtex.host as string,
    }),
  }
}
