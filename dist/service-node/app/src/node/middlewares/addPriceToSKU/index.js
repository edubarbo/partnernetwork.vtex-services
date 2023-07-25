"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPriceToSKU = void 0;
async function addPriceToSKU(ctx) {
    const { sku } = ctx.state;
    try {
        await ctx.clients.pricingClient.addPrice(sku.Id, {
            markup: 30,
            basePrice: 100,
        });
    }
    catch (error) {
        console.error('PricingMiddleware', error);
    }
}
exports.addPriceToSKU = addPriceToSKU;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9taWRkbGV3YXJlcy9hZGRQcmljZVRvU0tVL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLEtBQUssVUFBVSxhQUFhLENBQUMsR0FBdUI7SUFDekQsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7SUFFekIsSUFBSTtRQUNGLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxFQUFFLEVBQUU7WUFDVixTQUFTLEVBQUUsR0FBRztTQUNmLENBQUMsQ0FBQTtLQUNIO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQzFDO0FBQ0gsQ0FBQztBQVhELHNDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFByaWNlVG9TS1UoY3R4OiBDdXN0b21FdmVudENvbnRleHQpIHtcbiAgY29uc3QgeyBza3UgfSA9IGN0eC5zdGF0ZVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgY3R4LmNsaWVudHMucHJpY2luZ0NsaWVudC5hZGRQcmljZShza3UuSWQsIHtcbiAgICAgIG1hcmt1cDogMzAsXG4gICAgICBiYXNlUHJpY2U6IDEwMCxcbiAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1ByaWNpbmdNaWRkbGV3YXJlJywgZXJyb3IpXG4gIH1cbn1cbiJdfQ==