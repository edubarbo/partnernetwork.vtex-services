// Dependencies
import os from 'os'
import path from 'path'
import { omit } from 'lodash'

// Typing
import { IClient } from '../../typings/client'

// Utils
import { getAttachmentURL } from '../../utils/getAttachmentURL'

interface Args {
  id: IClient['id']
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

export const updateClient = async (
  _: any,
  { id, input }: Args,
  ctx: Context
) => {
  await ctx.clients.masterdata.updatePartialDocument({
    id,
    dataEntity: 'PC',
    fields: input,
  })

  await saveAttachment(ctx, input, id)

  const clientDocument = await ctx.clients.masterdata.getDocument<IClient>({
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

  if (clientDocument) {
    await ctx.clients.masterdata.updatePartialDocument({
      id: clientDocument.partnerID,
      dataEntity: 'PN',
      fields: {
        status: 'PENDING',
      },
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

  return clientDocument
}
