"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const co_body_1 = require("co-body");
async function sendContactEmail(ctx, next) {
    const { clients: { messageCenterClient, masterDataV1 } } = ctx;
    const { company, email, message, name, partner, phone } = await co_body_1.json(ctx.req);
    if (!partner)
        return;
    const dataPartner = await masterDataV1.getPartnerByName(partner);
    if (!dataPartner.length)
        return;
    const emailPartner = dataPartner[0].email;
    await messageCenterClient.post('contact-partner', {
        company,
        email,
        message,
        name,
        emailPartner,
        phone,
        partner
    });
    ctx.status = 204;
    await next();
}
exports.sendContactEmail = sendContactEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yb3V0ZXMvc2VuZENvbnRhY3RFbWFpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBOEI7QUFFdkIsS0FBSyxVQUFVLGdCQUFnQixDQUFDLEdBQVksRUFBRSxJQUF3QjtJQUMzRSxNQUFNLEVBQ0YsT0FBTyxFQUFFLEVBQ1AsbUJBQW1CLEVBQ25CLFlBQVksRUFDYixFQUNKLEdBQUcsR0FBRyxDQUFBO0lBRVAsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxjQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdFLElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTTtJQUVwQixNQUFNLFdBQVcsR0FBRyxNQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNoRSxJQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFBRSxPQUFNO0lBRTlCLE1BQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDekMsTUFBTSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFDOUMsT0FBTztRQUNQLEtBQUs7UUFDTCxPQUFPO1FBQ1AsSUFBSTtRQUNKLFlBQVk7UUFDWixLQUFLO1FBQ0wsT0FBTztLQUNWLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBRWhCLE1BQU0sSUFBSSxFQUFFLENBQUE7QUFDZCxDQUFDO0FBNUJELDRDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzb24gfSBmcm9tICdjby1ib2R5J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3RFbWFpbChjdHg6IENvbnRleHQsIG5leHQ6ICgpID0+IFByb21pc2U8YW55Pikge1xuICBjb25zdCB7XG4gICAgICBjbGllbnRzOiB7XG4gICAgICAgIG1lc3NhZ2VDZW50ZXJDbGllbnQsXG4gICAgICAgIG1hc3RlckRhdGFWMVxuICAgICAgfVxuICB9ID0gY3R4XG5cbiAgY29uc3QgeyBjb21wYW55LCBlbWFpbCwgbWVzc2FnZSwgbmFtZSwgcGFydG5lciwgcGhvbmUgfSA9IGF3YWl0IGpzb24oY3R4LnJlcSlcbiAgaWYgKCFwYXJ0bmVyKSByZXR1cm5cblxuICBjb25zdCBkYXRhUGFydG5lciA9IGF3YWl0IG1hc3RlckRhdGFWMS5nZXRQYXJ0bmVyQnlOYW1lKHBhcnRuZXIpXG4gIGlmKCFkYXRhUGFydG5lci5sZW5ndGgpIHJldHVyblxuXG4gIGNvbnN0IGVtYWlsUGFydG5lciA9IGRhdGFQYXJ0bmVyWzBdLmVtYWlsXG4gIGF3YWl0IG1lc3NhZ2VDZW50ZXJDbGllbnQucG9zdCgnY29udGFjdC1wYXJ0bmVyJywge1xuICAgICAgY29tcGFueSxcbiAgICAgIGVtYWlsLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWUsXG4gICAgICBlbWFpbFBhcnRuZXIsXG4gICAgICBwaG9uZSxcbiAgICAgIHBhcnRuZXJcbiAgfSlcblxuICBjdHguc3RhdHVzID0gMjA0XG5cbiAgYXdhaXQgbmV4dCgpXG59XG4iXX0=