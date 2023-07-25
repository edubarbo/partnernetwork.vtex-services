"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partner = void 0;
// Utils
const getPartner_1 = require("../../utils/getPartner");
exports.partner = async (_, { account }, ctx) => {
    const document = await getPartner_1.getPartner(account, ctx);
    if (!document)
        return;
    document.types = JSON.parse(document.types.toString());
    document.regions = JSON.parse(document.regions.toString());
    document.categories = JSON.parse(document.categories.toString());
    document.subcategories = JSON.parse(document.subcategories.toString());
    return document;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvcGFydG5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxRQUFRO0FBQ1IsdURBQW1EO0FBTXRDLFFBQUEsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFNLEVBQUUsRUFBRSxPQUFPLEVBQVEsRUFBRSxHQUFZLEVBQUUsRUFBRTtJQUN2RSxNQUFNLFFBQVEsR0FBRyxNQUFNLHVCQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBRS9DLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTTtJQUVyQixRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ3RELFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDMUQsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtJQUNoRSxRQUFRLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBRXRFLE9BQU8sUUFBUSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFR5cGluZ1xuaW1wb3J0IHsgSVBhcnRuZXIgfSBmcm9tICcuLi8uLi90eXBpbmdzL3BhcnRuZXInXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBnZXRQYXJ0bmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0UGFydG5lcidcblxuaW50ZXJmYWNlIEFyZ3Mge1xuICBhY2NvdW50OiBJUGFydG5lclsnYWNjb3VudCddXG59XG5cbmV4cG9ydCBjb25zdCBwYXJ0bmVyID0gYXN5bmMgKF86IGFueSwgeyBhY2NvdW50IH06IEFyZ3MsIGN0eDogQ29udGV4dCkgPT4ge1xuICBjb25zdCBkb2N1bWVudCA9IGF3YWl0IGdldFBhcnRuZXIoYWNjb3VudCwgY3R4KVxuXG4gIGlmICghZG9jdW1lbnQpIHJldHVyblxuXG4gIGRvY3VtZW50LnR5cGVzID0gSlNPTi5wYXJzZShkb2N1bWVudC50eXBlcy50b1N0cmluZygpKVxuICBkb2N1bWVudC5yZWdpb25zID0gSlNPTi5wYXJzZShkb2N1bWVudC5yZWdpb25zLnRvU3RyaW5nKCkpXG4gIGRvY3VtZW50LmNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGRvY3VtZW50LmNhdGVnb3JpZXMudG9TdHJpbmcoKSlcbiAgZG9jdW1lbnQuc3ViY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UoZG9jdW1lbnQuc3ViY2F0ZWdvcmllcy50b1N0cmluZygpKVxuXG4gIHJldHVybiBkb2N1bWVudFxufVxuIl19