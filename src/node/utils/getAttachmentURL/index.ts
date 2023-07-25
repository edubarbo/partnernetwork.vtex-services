interface IGetAttachmentURLPayload {
  id: string
  host: string
  field: string
  fileName: string
  dataEntity: string
}

export const getAttachmentURL = ({
  id,
  host,
  field,
  fileName,
  dataEntity,
}: IGetAttachmentURLPayload) =>
  `https://${host}/api/dataentities/${dataEntity}/documents/${id}/${field}/attachments/${fileName}`
