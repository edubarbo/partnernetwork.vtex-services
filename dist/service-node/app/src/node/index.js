"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const api_1 = require("@vtex/api");
// Routes
const routes_1 = __importDefault(require("./routes"));
// Events
const events_1 = __importDefault(require("./events"));
// Resolvers
const resolvers_1 = __importDefault(require("./resolvers"));
// Clients
const clients_1 = require("./clients");
const TREE_SECONDS_MS = 3 * 1000;
const clients = {
    implementation: clients_1.Clients,
    options: {
        // All IO Clients will be initialized with these options, unless otherwise specified.
        default: {
            retries: 2,
            timeout: TREE_SECONDS_MS,
        },
    },
};
exports.default = new api_1.Service({
    routes: routes_1.default,
    events: events_1.default,
    clients,
    graphql: {
        resolvers: resolvers_1.default,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7QUFDZixtQ0FPa0I7QUFVbEIsU0FBUztBQUNULHNEQUE2QjtBQUU3QixTQUFTO0FBQ1Qsc0RBQTZCO0FBRTdCLFlBQVk7QUFDWiw0REFBbUM7QUFFbkMsVUFBVTtBQUNWLHVDQUFtQztBQUVuQyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFBO0FBeUJoQyxNQUFNLE9BQU8sR0FBMkI7SUFDdEMsY0FBYyxFQUFFLGlCQUFPO0lBQ3ZCLE9BQU8sRUFBRTtRQUNQLHFGQUFxRjtRQUNyRixPQUFPLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxlQUFlO1NBQ3pCO0tBQ0Y7Q0FDRixDQUFBO0FBRUQsa0JBQWUsSUFBSSxhQUFPLENBQWdDO0lBQ3hELE1BQU0sRUFBTixnQkFBTTtJQUNOLE1BQU0sRUFBTixnQkFBTTtJQUNOLE9BQU87SUFDUCxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQVQsbUJBQVM7S0FDVjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHtcbiAgU2VydmljZSxcbiAgU2VydmljZUNvbnRleHQsXG4gIFJlY29yZGVyU3RhdGUsXG4gIENsaWVudHNDb25maWcsXG4gIFBhcmFtc0NvbnRleHQsXG4gIEV2ZW50Q29udGV4dCxcbn0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG4vLyBUeXBpbmdcbmltcG9ydCB7IElQYXJ0bmVyIH0gZnJvbSAnLi90eXBpbmdzL3BhcnRuZXInXG5pbXBvcnQge1xuICBDcmVhdGVQcm9kdWN0UmVzcG9uc2UsXG4gIENyZWF0ZVNLVVJlc3BvbnNlLFxufSBmcm9tICcuL2NsaWVudHMvQ2F0YWxvZ0NsaWVudC90eXBlcydcbmltcG9ydCB0eXBlIHsgUmVhZFN0cmVhbSB9IGZyb20gJ2ZzJ1xuXG4vLyBSb3V0ZXNcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbi8vIEV2ZW50c1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuL2V2ZW50cydcblxuLy8gUmVzb2x2ZXJzXG5pbXBvcnQgcmVzb2x2ZXJzIGZyb20gJy4vcmVzb2x2ZXJzJ1xuXG4vLyBDbGllbnRzXG5pbXBvcnQgeyBDbGllbnRzIH0gZnJvbSAnLi9jbGllbnRzJ1xuXG5jb25zdCBUUkVFX1NFQ09ORFNfTVMgPSAzICogMTAwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIFRoZSBzaGFwZSBvZiBvdXIgU3RhdGUgb2JqZWN0IGZvdW5kIGluIGBjdHguc3RhdGVgLlxuICAvLyBUaGlzIGlzIHVzZWQgYXMgc3RhdGUgYmFnIHRvIGNvbW11bmljYXRlIGJldHdlZW4gbWlkZGxld2FyZXMuXG5cbiAgaW50ZXJmYWNlIFN0YXRlIGV4dGVuZHMgUmVjb3JkZXJTdGF0ZSB7XG4gICAgYWNjb3VudDogc3RyaW5nXG4gICAgcGFydG5lcjogT21pdDxJUGFydG5lciwgJ2ltZ0ZpbGUnPiAmIHsgaW1nVVJMOiBzdHJpbmcgfVxuICAgIHByb2R1Y3Q6IENyZWF0ZVByb2R1Y3RSZXNwb25zZVxuICAgIHNrdTogQ3JlYXRlU0tVUmVzcG9uc2VcbiAgfVxuXG4gIGludGVyZmFjZSBGaWxlIHtcbiAgICBmaWxlbmFtZTogc3RyaW5nXG4gICAgbWltZXR5cGU6IHN0cmluZ1xuICAgIGVuY29kaW5nOiBzdHJpbmdcbiAgICBjcmVhdGVSZWFkU3RyZWFtOiAocGF0aDogc3RyaW5nIHwgQnVmZmVyKSA9PiBSZWFkU3RyZWFtXG4gIH1cblxuICB0eXBlIEN1c3RvbUV2ZW50Q29udGV4dCA9IEV2ZW50Q29udGV4dDxDbGllbnRzLCBTdGF0ZT5cblxuICB0eXBlIENvbnRleHQgPSBTZXJ2aWNlQ29udGV4dDxDbGllbnRzLCBTdGF0ZSwgUGFyYW1zQ29udGV4dD5cbn1cblxuY29uc3QgY2xpZW50czogQ2xpZW50c0NvbmZpZzxDbGllbnRzPiA9IHtcbiAgaW1wbGVtZW50YXRpb246IENsaWVudHMsXG4gIG9wdGlvbnM6IHtcbiAgICAvLyBBbGwgSU8gQ2xpZW50cyB3aWxsIGJlIGluaXRpYWxpemVkIHdpdGggdGhlc2Ugb3B0aW9ucywgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0cmllczogMixcbiAgICAgIHRpbWVvdXQ6IFRSRUVfU0VDT05EU19NUyxcbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VydmljZTxDbGllbnRzLCBTdGF0ZSwgUGFyYW1zQ29udGV4dD4oe1xuICByb3V0ZXMsXG4gIGV2ZW50cyxcbiAgY2xpZW50cyxcbiAgZ3JhcGhxbDoge1xuICAgIHJlc29sdmVycyxcbiAgfSxcbn0pXG4iXX0=