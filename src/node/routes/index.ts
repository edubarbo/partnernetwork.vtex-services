import { json } from 'co-body'
import { sendContactEmail } from './sendContactEmail'
import { badge } from './badge'

export default {
  approve: async function (ctx: Context, next: () => Promise<any>) {
    const body = await json(ctx.req)

    await ctx.clients.events.sendEvent('', 'publish', {
      partnerID: body.partnerID,
    })

    ctx.status = 204

    await next()
  },
  sendContactEmail,
  badge,
}
