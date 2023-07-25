import { json } from 'co-body'

export async function sendContactEmail(ctx: Context, next: () => Promise<any>) {
  const {
      clients: {
        messageCenterClient,
        masterDataV1
      }
  } = ctx

  const { company, email, message, name, partner, phone } = await json(ctx.req)
  if (!partner) return

  const dataPartner = await masterDataV1.getPartnerByName(partner)
  if(!dataPartner.length) return

  const emailPartner = dataPartner[0].email
  await messageCenterClient.post('contact-partner', {
      company,
      email,
      message,
      name,
      emailPartner,
      phone,
      partner
  })

  ctx.status = 204

  await next()
}
