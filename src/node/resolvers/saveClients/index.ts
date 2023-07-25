// Dependencies
import os from 'os'
import path from 'path'
import { omit } from 'lodash'

// Typing
import { IPartner } from '../../typings/partner'
import { IClient } from '../../typings/client'

interface Args {
  partnerID: IPartner['id']
  clients: (Omit<IClient, 'imgFile'> & {
    imgFile: Promise<File>
  })[]
}

const getAllClients = (partnerID: IPartner['id'], ctx: Context) => {
  return ctx.clients.masterdata.searchDocuments<IClient>({
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
}

const saveAttachment = async (
  ctx: Context,
  { name, imgFile }: Pick<Args['clients'][0], 'name' | 'imgFile'>,
  id: string
) => {
  const { createReadStream, filename, encoding, mimetype } = await imgFile

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

export const saveClients = async (
  _: any,
  { partnerID, clients }: Args,
  ctx: Context
) => {
  await ctx.clients.masterdata.updatePartialDocument({
    id: partnerID,
    dataEntity: 'PN',
    fields: {
      status: 'PENDING',
    },
  })

  const promises = clients.map(async (client) => {
    await ctx.clients.masterdata.updatePartialDocument({
      id: client.id,
      dataEntity: 'PC',
      fields: omit(client, 'id'),
    })

    if ('imgFile' in client) {
      const input = {
        name: client.name,
        imgFile: client.imgFile,
      }

      await saveAttachment(ctx, input, client.id)
    }

    return
  })

  await Promise.all(promises)

  return getAllClients(partnerID, ctx)
}
