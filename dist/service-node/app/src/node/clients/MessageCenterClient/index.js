"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@vtex/api");
const HOST = 'mailservice.vtex.com.br';
const PATH = '/api/mail-service/pvt/sendmail';
class Mail extends api_1.ExternalClient {
    constructor(ctx, options) {
        super(`${HOST}`, ctx, {
            ...options,
        });
        this.post = (templateName, jsonData, config = {}) => {
            var _a, _b;
            const { authToken, segmentToken } = this.context;
            const segmentTokenCookie = segmentToken
                ? `vtex_segment=${segmentToken};`
                : '';
            const authCookie = authToken
                ? `VtexIdclientAutCookie=${authToken}`
                : '';
            config.headers = {
                ...config.headers,
                ...(_a = this.options) === null || _a === void 0 ? void 0 : _a.headers,
                Cookie: `${segmentTokenCookie}${authCookie}`,
            };
            const url = `http://${((_b = this.options) === null || _b === void 0 ? void 0 : _b.baseURL) || HOST}${PATH}?an=${this.context.account}`;
            const body = {
                templateName,
                jsonData
            };
            return this.http.post(url, body, config);
        };
    }
}
exports.default = Mail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL01lc3NhZ2VDZW50ZXJDbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FLa0I7QUFFbEIsTUFBTSxJQUFJLEdBQUcseUJBQXlCLENBQUE7QUFDdEMsTUFBTSxJQUFJLEdBQUcsZ0NBQWdDLENBQUE7QUFFN0MsTUFBcUIsSUFBSyxTQUFRLG9CQUFjO0lBRTlDLFlBQVksR0FBYyxFQUFFLE9BQXlCO1FBQ25ELEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRTtZQUNwQixHQUFHLE9BQU87U0FDWCxDQUFDLENBQUE7UUFHRyxTQUFJLEdBQUcsQ0FBSSxZQUFtQixFQUFFLFFBQVksRUFBRSxTQUF3QixFQUFFLEVBQUUsRUFBRTs7WUFDakYsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO1lBQ2hELE1BQU0sa0JBQWtCLEdBQUcsWUFBWTtnQkFDckMsQ0FBQyxDQUFDLGdCQUFnQixZQUFZLEdBQUc7Z0JBQ2pDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFFTixNQUFNLFVBQVUsR0FBRyxTQUFTO2dCQUMxQixDQUFDLENBQUMseUJBQXlCLFNBQVMsRUFBRTtnQkFDdEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUc7Z0JBQ2YsR0FBRyxNQUFNLENBQUMsT0FBTztnQkFDakIsU0FBRyxJQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPO2dCQUN4QixNQUFNLEVBQUUsR0FBRyxrQkFBa0IsR0FBRyxVQUFVLEVBQUU7YUFDN0MsQ0FBQTtZQUVELE1BQU0sR0FBRyxHQUFHLFVBQVUsT0FBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLEtBQUksSUFBSSxHQUFHLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBRXZGLE1BQU0sSUFBSSxHQUFHO2dCQUNYLFlBQVk7Z0JBQ1osUUFBUTthQUNULENBQUE7WUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDN0MsQ0FBQyxDQUFBO0lBMUJELENBQUM7Q0EyQkY7QUFqQ0QsdUJBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRXh0ZXJuYWxDbGllbnQsXG4gIEluc3RhbmNlT3B0aW9ucyxcbiAgSU9Db250ZXh0LFxuICBSZXF1ZXN0Q29uZmlnXG59IGZyb20gJ0B2dGV4L2FwaSdcblxuY29uc3QgSE9TVCA9ICdtYWlsc2VydmljZS52dGV4LmNvbS5icidcbmNvbnN0IFBBVEggPSAnL2FwaS9tYWlsLXNlcnZpY2UvcHZ0L3NlbmRtYWlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWlsIGV4dGVuZHMgRXh0ZXJuYWxDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKGN0eDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoYCR7SE9TVH1gLCBjdHgsIHtcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBwb3N0ID0gPFQ+KHRlbXBsYXRlTmFtZTpzdHJpbmcsIGpzb25EYXRhOmFueSwgY29uZmlnOiBSZXF1ZXN0Q29uZmlnID0ge30pID0+IHtcbiAgICBjb25zdCB7IGF1dGhUb2tlbiwgc2VnbWVudFRva2VuIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBzZWdtZW50VG9rZW5Db29raWUgPSBzZWdtZW50VG9rZW5cbiAgICAgID8gYHZ0ZXhfc2VnbWVudD0ke3NlZ21lbnRUb2tlbn07YFxuICAgICAgOiAnJ1xuXG4gICAgY29uc3QgYXV0aENvb2tpZSA9IGF1dGhUb2tlblxuICAgICAgPyBgVnRleElkY2xpZW50QXV0Q29va2llPSR7YXV0aFRva2VufWBcbiAgICAgIDogJydcblxuICAgIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgLi4uY29uZmlnLmhlYWRlcnMsXG4gICAgICAuLi50aGlzLm9wdGlvbnM/LmhlYWRlcnMsXG4gICAgICBDb29raWU6IGAke3NlZ21lbnRUb2tlbkNvb2tpZX0ke2F1dGhDb29raWV9YCxcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXJsID0gYGh0dHA6Ly8ke3RoaXMub3B0aW9ucz8uYmFzZVVSTCB8fCBIT1NUfSR7UEFUSH0/YW49JHt0aGlzLmNvbnRleHQuYWNjb3VudH1gXG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdGVtcGxhdGVOYW1lLFxuICAgICAganNvbkRhdGFcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odXJsLCBib2R5LCBjb25maWcpXG4gIH1cbn1cbiJdfQ==