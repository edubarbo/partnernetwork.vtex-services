"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clients = void 0;
// Dependencies
const api_1 = require("@vtex/api");
// Clients
const clients_1 = require("@vtex/clients");
const CatalogClient_1 = __importDefault(require("./CatalogClient"));
const MasterDataV1_1 = __importDefault(require("./MasterDataV1"));
const PricingClient_1 = __importDefault(require("./PricingClient"));
const MessageCenterClient_1 = __importDefault(require("./MessageCenterClient"));
class Clients extends api_1.IOClients {
    get search() {
        return this.getOrSet('search', clients_1.Search);
    }
    get catalog() {
        return this.getOrSet('catalog', CatalogClient_1.default);
    }
    get masterDataV1() {
        return this.getOrSet('masterDataV1', MasterDataV1_1.default);
    }
    get pricingClient() {
        return this.getOrSet('pricingClient', PricingClient_1.default);
    }
    get messageCenterClient() {
        return this.getOrSet('messageCenterClient', MessageCenterClient_1.default);
    }
}
exports.Clients = Clients;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGVBQWU7QUFDZixtQ0FBcUM7QUFFckMsVUFBVTtBQUNWLDJDQUFzQztBQUN0QyxvRUFBMkM7QUFDM0Msa0VBQXlDO0FBQ3pDLG9FQUEyQztBQUMzQyxnRkFBdUQ7QUFFdkQsTUFBYSxPQUFRLFNBQVEsZUFBUztJQUNwQyxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGdCQUFNLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsdUJBQWEsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxzQkFBWSxDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLHVCQUFhLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRUQsSUFBVyxtQkFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLDZCQUFtQixDQUFDLENBQUE7SUFDbEUsQ0FBQztDQUNGO0FBcEJELDBCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgSU9DbGllbnRzIH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG4vLyBDbGllbnRzXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICdAdnRleC9jbGllbnRzJ1xuaW1wb3J0IENhdGFsb2dDbGllbnQgZnJvbSAnLi9DYXRhbG9nQ2xpZW50J1xuaW1wb3J0IE1hc3RlckRhdGFWMSBmcm9tICcuL01hc3RlckRhdGFWMSdcbmltcG9ydCBQcmljaW5nQ2xpZW50IGZyb20gJy4vUHJpY2luZ0NsaWVudCdcbmltcG9ydCBNZXNzYWdlQ2VudGVyQ2xpZW50IGZyb20gJy4vTWVzc2FnZUNlbnRlckNsaWVudCdcblxuZXhwb3J0IGNsYXNzIENsaWVudHMgZXh0ZW5kcyBJT0NsaWVudHMge1xuICBwdWJsaWMgZ2V0IHNlYXJjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPclNldCgnc2VhcmNoJywgU2VhcmNoKVxuICB9XG5cbiAgcHVibGljIGdldCBjYXRhbG9nKCkge1xuICAgIHJldHVybiB0aGlzLmdldE9yU2V0KCdjYXRhbG9nJywgQ2F0YWxvZ0NsaWVudClcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWFzdGVyRGF0YVYxKCkge1xuICAgIHJldHVybiB0aGlzLmdldE9yU2V0KCdtYXN0ZXJEYXRhVjEnLCBNYXN0ZXJEYXRhVjEpXG4gIH1cblxuICBwdWJsaWMgZ2V0IHByaWNpbmdDbGllbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3JTZXQoJ3ByaWNpbmdDbGllbnQnLCBQcmljaW5nQ2xpZW50KVxuICB9XG5cbiAgcHVibGljIGdldCBtZXNzYWdlQ2VudGVyQ2xpZW50KCkge1xuICAgIHJldHVybiB0aGlzLmdldE9yU2V0KCdtZXNzYWdlQ2VudGVyQ2xpZW50JywgTWVzc2FnZUNlbnRlckNsaWVudClcbiAgfVxufVxuIl19