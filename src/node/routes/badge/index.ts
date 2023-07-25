export async function badge(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalog, masterDataV1 },
  } = ctx

  ctx.status = 404
  const { account } = ctx.request.query

  if (!account) return

  const dataPartner = (await masterDataV1.searchDocuments({
    dataEntity: 'PN',
    fields: ['status', 'name'],
    where: `(account=${account})`,
    pagination: {
      page: 1,
      pageSize: 1,
    },
  })) as { status: string }[]

  if (!dataPartner.length) return

  if (dataPartner[0].status !== 'APPROVED') {
    ctx.status = 403

    return
  }

  const partner = await catalog.getProductByRefId(account)

  ctx.body = `
    <a href="https://partnerportal.vtex.com/${partner.LinkId}/p" title="${partner.Name}" target="_blank" style="display:flex;flex-direction:column;text-decoration:none;">
      <span style="font-size:12px;color:#333;margin:0 0 -0.75rem 1rem">${partner.Name}</span>
      <img src="https://partnernetwork.vtexassets.com/arquivos/vtex-partner-badge.svg" alt="VTEX Partner" width="132" height="72"/>
    </a>
  `
  ctx.status = 200

  await next()
}
