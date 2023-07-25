"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@vtex/api");
class PricingClient extends api_1.ExternalClient {
    constructor(context, options) {
        super(`http://api.vtex.com/${context.account}/pricing`, context, {
            ...options,
            headers: {
                ...options === null || options === void 0 ? void 0 : options.headers,
                Accept: 'application/vnd.vtex.pricing.v3+json',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/json',
                'X-Vtex-Use-Https': 'true',
                VtexIdclientAutCookie: context.authToken,
            },
        });
        this.createPriceTable = (tradePolicyId) => this.http.put(`/tables/${tradePolicyId}`);
        this.addPriceTableRules = (data) => this.http.put(`/pipeline/catalog/${data.tradePolicyId}`, data);
    }
    addPrice(skuId, pricePayload) {
        return this.http.put(`/prices/${skuId}`, pricePayload);
    }
}
exports.default = PricingClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL1ByaWNpbmdDbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBMEM7QUFFMUMsTUFBcUIsYUFBYyxTQUFRLG9CQUFjO0lBQ3ZELFlBQVksT0FBa0IsRUFBRSxPQUF5QjtRQUN2RCxLQUFLLENBQUMsdUJBQXVCLE9BQU8sQ0FBQyxPQUFPLFVBQVUsRUFBRSxPQUFPLEVBQUU7WUFDL0QsR0FBRyxPQUFPO1lBQ1YsT0FBTyxFQUFFO2dCQUNQLEdBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE9BQU87Z0JBQ25CLE1BQU0sRUFBRSxzQ0FBc0M7Z0JBQzlDLGVBQWUsRUFBRSxVQUFVO2dCQUMzQixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixxQkFBcUIsRUFBRSxPQUFPLENBQUMsU0FBUzthQUN6QztTQUNGLENBQUMsQ0FBQTtRQU9HLHFCQUFnQixHQUFHLENBQUMsYUFBcUIsRUFBRSxFQUFFLENBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsYUFBYSxFQUFFLENBQUMsQ0FBQTtRQUVwQyx1QkFBa0IsR0FBRyxDQUFDLElBQTBCLEVBQUUsRUFBRSxDQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBVmhFLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBc0IsRUFBRSxZQUFpQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLFdBQVcsS0FBSyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDN0QsQ0FBQztDQU9GO0FBeEJELGdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5zdGFuY2VPcHRpb25zLCBJT0NvbnRleHQgfSBmcm9tICdAdnRleC9hcGknXG5pbXBvcnQgeyBFeHRlcm5hbENsaWVudCB9IGZyb20gJ0B2dGV4L2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpY2luZ0NsaWVudCBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoYGh0dHA6Ly9hcGkudnRleC5jb20vJHtjb250ZXh0LmFjY291bnR9L3ByaWNpbmdgLCBjb250ZXh0LCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi5vcHRpb25zPy5oZWFkZXJzLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQudnRleC5wcmljaW5nLnYzK2pzb24nLFxuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdYLVZ0ZXgtVXNlLUh0dHBzJzogJ3RydWUnLFxuICAgICAgICBWdGV4SWRjbGllbnRBdXRDb29raWU6IGNvbnRleHQuYXV0aFRva2VuLFxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFkZFByaWNlKHNrdUlkOiBzdHJpbmcgfCBudW1iZXIsIHByaWNlUGF5bG9hZDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8YW55PihgL3ByaWNlcy8ke3NrdUlkfWAsIHByaWNlUGF5bG9hZClcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVQcmljZVRhYmxlID0gKHRyYWRlUG9saWN5SWQ6IHN0cmluZykgPT5cbiAgICB0aGlzLmh0dHAucHV0KGAvdGFibGVzLyR7dHJhZGVQb2xpY3lJZH1gKVxuXG4gIHB1YmxpYyBhZGRQcmljZVRhYmxlUnVsZXMgPSAoZGF0YTogVXBkYXRlUHJpY2VUYWJsZURhdGEpID0+XG4gICAgdGhpcy5odHRwLnB1dChgL3BpcGVsaW5lL2NhdGFsb2cvJHtkYXRhLnRyYWRlUG9saWN5SWR9YCwgZGF0YSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVQcmljZVRhYmxlRGF0YSB7XG4gIHRyYWRlUG9saWN5SWQ6IHN0cmluZ1xuICBydWxlczogUnVsZVtdXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUnVsZSB7XG4gIGlkOiBudW1iZXJcbiAgdHJhZGVQb2xpY3lJZDogc3RyaW5nXG4gIHBlcmNlbnR1YWxNb2RpZmllcjogbnVtYmVyXG4gIGRhdGVSYW5nZVN0YXR1czogbnVsbFxuICBjb250ZXh0OiBDb250ZXh0XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGV4dCB7XG4gIGNhdGVnb3JpZXM6IFJlY29yZDxzdHJpbmcsIG5ldmVyPlxuICBicmFuZHM6IFJlY29yZDxzdHJpbmcsIG5ldmVyPlxuICBtYXJrdXBSYW5nZTogbnVsbFxuICBkYXRlUmFuZ2U6IG51bGxcbn1cbiJdfQ==