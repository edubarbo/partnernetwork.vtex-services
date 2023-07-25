"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateSKU = void 0;
async function activateSKU(ctx) {
    const { sku } = ctx.state;
    await ctx.clients.catalog.updateSKU({
        ...sku,
        IsActive: true,
    });
}
exports.activateSKU = activateSKU;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9taWRkbGV3YXJlcy9hY3RpdmF0ZVNLVS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxLQUFLLFVBQVUsV0FBVyxDQUFDLEdBQXVCO0lBQ3ZELE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFBO0lBRXpCLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2xDLEdBQUcsR0FBRztRQUNOLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVBELGtDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFjdGl2YXRlU0tVKGN0eDogQ3VzdG9tRXZlbnRDb250ZXh0KSB7XG4gIGNvbnN0IHsgc2t1IH0gPSBjdHguc3RhdGVcblxuICBhd2FpdCBjdHguY2xpZW50cy5jYXRhbG9nLnVwZGF0ZVNLVSh7XG4gICAgLi4uc2t1LFxuICAgIElzQWN0aXZlOiB0cnVlLFxuICB9KVxufVxuIl19