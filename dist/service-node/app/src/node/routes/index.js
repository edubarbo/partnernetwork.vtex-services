"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const co_body_1 = require("co-body");
const sendContactEmail_1 = require("./sendContactEmail");
const badge_1 = require("./badge");
exports.default = {
    approve: async function (ctx, next) {
        const body = await co_body_1.json(ctx.req);
        await ctx.clients.events.sendEvent('', 'publish', {
            partnerID: body.partnerID,
        });
        ctx.status = 204;
        await next();
    },
    sendContactEmail: sendContactEmail_1.sendContactEmail,
    badge: badge_1.badge,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBOEI7QUFDOUIseURBQXFEO0FBQ3JELG1DQUErQjtBQUUvQixrQkFBZTtJQUNiLE9BQU8sRUFBRSxLQUFLLFdBQVcsR0FBWSxFQUFFLElBQXdCO1FBQzdELE1BQU0sSUFBSSxHQUFHLE1BQU0sY0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVoQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFO1lBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUE7UUFFRixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtRQUVoQixNQUFNLElBQUksRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUNELGdCQUFnQixFQUFoQixtQ0FBZ0I7SUFDaEIsS0FBSyxFQUFMLGFBQUs7Q0FDTixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNvbiB9IGZyb20gJ2NvLWJvZHknXG5pbXBvcnQgeyBzZW5kQ29udGFjdEVtYWlsIH0gZnJvbSAnLi9zZW5kQ29udGFjdEVtYWlsJ1xuaW1wb3J0IHsgYmFkZ2UgfSBmcm9tICcuL2JhZGdlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwcHJvdmU6IGFzeW5jIGZ1bmN0aW9uIChjdHg6IENvbnRleHQsIG5leHQ6ICgpID0+IFByb21pc2U8YW55Pikge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCBqc29uKGN0eC5yZXEpXG5cbiAgICBhd2FpdCBjdHguY2xpZW50cy5ldmVudHMuc2VuZEV2ZW50KCcnLCAncHVibGlzaCcsIHtcbiAgICAgIHBhcnRuZXJJRDogYm9keS5wYXJ0bmVySUQsXG4gICAgfSlcblxuICAgIGN0eC5zdGF0dXMgPSAyMDRcblxuICAgIGF3YWl0IG5leHQoKVxuICB9LFxuICBzZW5kQ29udGFjdEVtYWlsLFxuICBiYWRnZSxcbn1cbiJdfQ==