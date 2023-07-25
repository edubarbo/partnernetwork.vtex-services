"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Resolvers
const partner_1 = require("./partner");
const partnersWithPaginationInfo_1 = require("./partnersWithPaginationInfo");
const savePartner_1 = require("./savePartner");
const service_1 = require("./service");
const services_1 = require("./services");
const createService_1 = require("./createService");
const updateService_1 = require("./updateService");
const saveServices_1 = require("./saveServices");
const client_1 = require("./client");
const clients_1 = require("./clients");
const createClient_1 = require("./createClient");
const updateClient_1 = require("./updateClient");
const saveClients_1 = require("./saveClients");
exports.default = {
    Mutation: {
        savePartner: savePartner_1.savePartner,
        createService: createService_1.createService,
        updateService: updateService_1.updateService,
        saveServices: saveServices_1.saveServices,
        createClient: createClient_1.createClient,
        updateClient: updateClient_1.updateClient,
        saveClients: saveClients_1.saveClients,
    },
    Query: {
        partner: partner_1.partner,
        partnersWithPaginationInfo: partnersWithPaginationInfo_1.partnersWithPaginationInfo,
        service: service_1.service,
        services: services_1.services,
        client: client_1.client,
        clients: clients_1.clients,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxZQUFZO0FBQ1osdUNBQW1DO0FBQ25DLDZFQUF5RTtBQUN6RSwrQ0FBMkM7QUFFM0MsdUNBQW1DO0FBQ25DLHlDQUFxQztBQUNyQyxtREFBK0M7QUFDL0MsbURBQStDO0FBQy9DLGlEQUE2QztBQUU3QyxxQ0FBaUM7QUFDakMsdUNBQW1DO0FBQ25DLGlEQUE2QztBQUM3QyxpREFBNkM7QUFDN0MsK0NBQTJDO0FBRTNDLGtCQUFlO0lBQ2IsUUFBUSxFQUFFO1FBQ1IsV0FBVyxFQUFYLHlCQUFXO1FBQ1gsYUFBYSxFQUFiLDZCQUFhO1FBQ2IsYUFBYSxFQUFiLDZCQUFhO1FBQ2IsWUFBWSxFQUFaLDJCQUFZO1FBQ1osWUFBWSxFQUFaLDJCQUFZO1FBQ1osWUFBWSxFQUFaLDJCQUFZO1FBQ1osV0FBVyxFQUFYLHlCQUFXO0tBQ1o7SUFDRCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQVAsaUJBQU87UUFDUCwwQkFBMEIsRUFBMUIsdURBQTBCO1FBQzFCLE9BQU8sRUFBUCxpQkFBTztRQUNQLFFBQVEsRUFBUixtQkFBUTtRQUNSLE1BQU0sRUFBTixlQUFNO1FBQ04sT0FBTyxFQUFQLGlCQUFPO0tBQ1I7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVzb2x2ZXJzXG5pbXBvcnQgeyBwYXJ0bmVyIH0gZnJvbSAnLi9wYXJ0bmVyJ1xuaW1wb3J0IHsgcGFydG5lcnNXaXRoUGFnaW5hdGlvbkluZm8gfSBmcm9tICcuL3BhcnRuZXJzV2l0aFBhZ2luYXRpb25JbmZvJ1xuaW1wb3J0IHsgc2F2ZVBhcnRuZXIgfSBmcm9tICcuL3NhdmVQYXJ0bmVyJ1xuXG5pbXBvcnQgeyBzZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJ1xuaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzJ1xuaW1wb3J0IHsgY3JlYXRlU2VydmljZSB9IGZyb20gJy4vY3JlYXRlU2VydmljZSdcbmltcG9ydCB7IHVwZGF0ZVNlcnZpY2UgfSBmcm9tICcuL3VwZGF0ZVNlcnZpY2UnXG5pbXBvcnQgeyBzYXZlU2VydmljZXMgfSBmcm9tICcuL3NhdmVTZXJ2aWNlcydcblxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi9jbGllbnQnXG5pbXBvcnQgeyBjbGllbnRzIH0gZnJvbSAnLi9jbGllbnRzJ1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnLi9jcmVhdGVDbGllbnQnXG5pbXBvcnQgeyB1cGRhdGVDbGllbnQgfSBmcm9tICcuL3VwZGF0ZUNsaWVudCdcbmltcG9ydCB7IHNhdmVDbGllbnRzIH0gZnJvbSAnLi9zYXZlQ2xpZW50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBNdXRhdGlvbjoge1xuICAgIHNhdmVQYXJ0bmVyLFxuICAgIGNyZWF0ZVNlcnZpY2UsXG4gICAgdXBkYXRlU2VydmljZSxcbiAgICBzYXZlU2VydmljZXMsXG4gICAgY3JlYXRlQ2xpZW50LFxuICAgIHVwZGF0ZUNsaWVudCxcbiAgICBzYXZlQ2xpZW50cyxcbiAgfSxcbiAgUXVlcnk6IHtcbiAgICBwYXJ0bmVyLFxuICAgIHBhcnRuZXJzV2l0aFBhZ2luYXRpb25JbmZvLFxuICAgIHNlcnZpY2UsXG4gICAgc2VydmljZXMsXG4gICAgY2xpZW50LFxuICAgIGNsaWVudHMsXG4gIH0sXG59XG4iXX0=