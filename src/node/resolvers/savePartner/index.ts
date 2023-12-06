// Dependencies
import os from 'os'
import path from 'path'
import { assign } from 'lodash'

// Typing
import { IPartner } from '../../typings/partner'

// Utils
import { getPartner } from '../../utils/getPartner'
import { getPartnerById } from '../../utils/getPartnerById'

interface Args {
  input: Omit<IPartner, 'status' | 'id' | 'imgFile'> & {
    imgFile: Promise<File>
  }
}

const saveAttachment = async (
  ctx: Context,
  input: Args['input'],
  id: string
) => {
  const { account } = input

  const { createReadStream, filename, encoding, mimetype } = await input.imgFile

  const saveTo = path.join(os.tmpdir(), path.basename(filename))

  const stream = createReadStream(saveTo)

  const [, ext] = filename.split('.')

  //@ts-ignore
  stream.fieldname = 'file' + Math.random().toString(16).substring(2)

  //@ts-ignore
  stream.name = stream.filename = `${account}.${ext}`
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
    dataEntity: 'PN',
    field: 'imgFile',
    file: stream,
  })
}

export const savePartner = async (_: any, { input }: Args, ctx: Context) => {

  //console.log({ input })//TODO: Retirar

  const data = assign(input, {
    types: JSON.stringify(input.types),
    regions: JSON.stringify(input.regions),
    categories: JSON.stringify(input.categories),
    subcategories: JSON.stringify(input.subcategories),
  })

  const document = await getPartner(input.account, ctx)

  let documentId
  console.log({ ...data })//TODO: Retirar

  if (!document) {
    console.log({ ...data })//TODO: Retirar
    const response = await ctx.clients.masterdata.createDocument({
      dataEntity: 'PN',
      fields: {
        ...data,
        status: 'PENDING',
      },
    })

    documentId = response.DocumentId
  } else {
    await ctx.clients.masterdata.updatePartialDocument({
      id: document.id,
      dataEntity: 'PN',
      fields: {
        ...data,
        status: 'PENDING',
      },
    })

    documentId = document.id
  }

  if ('imgFile' in input) {
    await saveAttachment(ctx, input, documentId)
  }

  const newDocument = await getPartnerById(documentId, ctx)

  if (newDocument) {
    return {
      ...newDocument,
      types: JSON.parse(newDocument.types.toString()),
      regions: JSON.parse(newDocument.regions.toString()),
      categories: JSON.parse(newDocument.categories.toString()),
      subcategories: JSON.parse(newDocument.subcategories.toString()),
    }
  }

  return newDocument
}
