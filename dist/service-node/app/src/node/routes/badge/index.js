"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badge = void 0;
async function badge(ctx, next) {
    const { clients: { catalog, masterDataV1 }, } = ctx;
    ctx.status = 404;
    const { account } = ctx.request.query;
    if (!account)
        return;
    const dataPartner = (await masterDataV1.searchDocuments({
        dataEntity: 'PN',
        fields: ['status', 'name'],
        where: `(account=${account})`,
        pagination: {
            page: 1,
            pageSize: 1,
        },
    }));
    if (!dataPartner.length)
        return;
    if (dataPartner[0].status !== 'APPROVED') {
        ctx.status = 403;
        return;
    }
    const partner = await catalog.getProductByRefId(account);
    ctx.body = `
    <a href="https://partnerportal.vtex.com/${partner.LinkId}/p" title="${partner.Name}" target="_blank" style="display:flex;flex-direction:column;text-decoration:none;">
      <span style="font-size:12px;color:#333;margin:0 0 -0.75rem 1rem">${partner.Name}</span>
      <img src="https://partnernetwork.vtexassets.com/arquivos/vtex-partner-badge.svg" alt="VTEX Partner" width="132" height="72"/>
    </a>
  `;
    ctx.status = 200;
    await next();
}
exports.badge = badge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yb3V0ZXMvYmFkZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sS0FBSyxVQUFVLEtBQUssQ0FBQyxHQUFZLEVBQUUsSUFBd0I7SUFDaEUsTUFBTSxFQUNKLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsR0FDbkMsR0FBRyxHQUFHLENBQUE7SUFFUCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUNoQixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7SUFFckMsSUFBSSxDQUFDLE9BQU87UUFBRSxPQUFNO0lBRXBCLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3RELFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFDMUIsS0FBSyxFQUFFLFlBQVksT0FBTyxHQUFHO1FBQzdCLFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxDQUFDO1lBQ1AsUUFBUSxFQUFFLENBQUM7U0FDWjtLQUNGLENBQUMsQ0FBeUIsQ0FBQTtJQUUzQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU07UUFBRSxPQUFNO0lBRS9CLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7UUFDeEMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7UUFFaEIsT0FBTTtLQUNQO0lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFeEQsR0FBRyxDQUFDLElBQUksR0FBRzs4Q0FDaUMsT0FBTyxDQUFDLE1BQU0sY0FBYyxPQUFPLENBQUMsSUFBSTt5RUFDYixPQUFPLENBQUMsSUFBSTs7O0dBR2xGLENBQUE7SUFDRCxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtJQUVoQixNQUFNLElBQUksRUFBRSxDQUFBO0FBQ2QsQ0FBQztBQXZDRCxzQkF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gYmFkZ2UoY3R4OiBDb250ZXh0LCBuZXh0OiAoKSA9PiBQcm9taXNlPGFueT4pIHtcbiAgY29uc3Qge1xuICAgIGNsaWVudHM6IHsgY2F0YWxvZywgbWFzdGVyRGF0YVYxIH0sXG4gIH0gPSBjdHhcblxuICBjdHguc3RhdHVzID0gNDA0XG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gY3R4LnJlcXVlc3QucXVlcnlcblxuICBpZiAoIWFjY291bnQpIHJldHVyblxuXG4gIGNvbnN0IGRhdGFQYXJ0bmVyID0gKGF3YWl0IG1hc3RlckRhdGFWMS5zZWFyY2hEb2N1bWVudHMoe1xuICAgIGRhdGFFbnRpdHk6ICdQTicsXG4gICAgZmllbGRzOiBbJ3N0YXR1cycsICduYW1lJ10sXG4gICAgd2hlcmU6IGAoYWNjb3VudD0ke2FjY291bnR9KWAsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgcGFnZTogMSxcbiAgICAgIHBhZ2VTaXplOiAxLFxuICAgIH0sXG4gIH0pKSBhcyB7IHN0YXR1czogc3RyaW5nIH1bXVxuXG4gIGlmICghZGF0YVBhcnRuZXIubGVuZ3RoKSByZXR1cm5cblxuICBpZiAoZGF0YVBhcnRuZXJbMF0uc3RhdHVzICE9PSAnQVBQUk9WRUQnKSB7XG4gICAgY3R4LnN0YXR1cyA9IDQwM1xuXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBwYXJ0bmVyID0gYXdhaXQgY2F0YWxvZy5nZXRQcm9kdWN0QnlSZWZJZChhY2NvdW50KVxuXG4gIGN0eC5ib2R5ID0gYFxuICAgIDxhIGhyZWY9XCJodHRwczovL3BhcnRuZXJwb3J0YWwudnRleC5jb20vJHtwYXJ0bmVyLkxpbmtJZH0vcFwiIHRpdGxlPVwiJHtwYXJ0bmVyLk5hbWV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3RleHQtZGVjb3JhdGlvbjpub25lO1wiPlxuICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTJweDtjb2xvcjojMzMzO21hcmdpbjowIDAgLTAuNzVyZW0gMXJlbVwiPiR7cGFydG5lci5OYW1lfTwvc3Bhbj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wYXJ0bmVybmV0d29yay52dGV4YXNzZXRzLmNvbS9hcnF1aXZvcy92dGV4LXBhcnRuZXItYmFkZ2Uuc3ZnXCIgYWx0PVwiVlRFWCBQYXJ0bmVyXCIgd2lkdGg9XCIxMzJcIiBoZWlnaHQ9XCI3MlwiLz5cbiAgICA8L2E+XG4gIGBcbiAgY3R4LnN0YXR1cyA9IDIwMFxuXG4gIGF3YWl0IG5leHQoKVxufVxuIl19