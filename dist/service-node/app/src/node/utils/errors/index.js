"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusToError = exports.returnDataIfConflictOrThrow = exports.returnMessageOrThrow = exports.returnDocumentIdOrTrhow = exports.throwIfNotModified = void 0;
const api_1 = require("@vtex/api");
exports.throwIfNotModified = (error) => {
    var _a;
    // 304 means document was not updated therefore we do not treat as an error
    if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== 304)
        throw error;
};
exports.returnDocumentIdOrTrhow = (error) => {
    var _a, _b, _c;
    exports.throwIfNotModified(error);
    return (_c = (_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b['x-vtex-document-id']) !== null && _c !== void 0 ? _c : '';
};
exports.returnMessageOrThrow = (error) => {
    exports.throwIfNotModified(error);
    return { Message: 'Not Modified' };
};
exports.returnDataIfConflictOrThrow = (data) => (error) => {
    var _a;
    // If SKU already exists catalog API will return 409
    if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 409)
        return data;
    throw error;
};
exports.statusToError = (e) => {
    if (!e.response)
        throw e;
    const { response } = e;
    const { status } = response;
    if (status === 401) {
        throw new api_1.AuthenticationError(e);
    }
    if (status === 403) {
        throw new api_1.ForbiddenError(e);
    }
    if (status === 400) {
        throw new api_1.UserInputError(e);
    }
    throw e;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS91dGlscy9lcnJvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQStFO0FBTWxFLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxLQUFpQixFQUFFLEVBQUU7O0lBQ3RELDJFQUEyRTtJQUMzRSxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsMENBQUUsTUFBTSxNQUFLLEdBQUc7UUFBRSxNQUFNLEtBQUssQ0FBQTtBQUNqRCxDQUFDLENBQUE7QUFFWSxRQUFBLHVCQUF1QixHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFOztJQUMzRCwwQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUV6Qix5QkFBTyxLQUFLLENBQUMsUUFBUSwwQ0FBRSxPQUFPLDBDQUFHLG9CQUFvQixvQ0FBSyxFQUFFLENBQUE7QUFDOUQsQ0FBQyxDQUFBO0FBRVksUUFBQSxvQkFBb0IsR0FBRyxDQUNsQyxLQUFpQixFQUNhLEVBQUU7SUFDaEMsMEJBQWtCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQTtBQUNwQyxDQUFDLENBQUE7QUFFWSxRQUFBLDJCQUEyQixHQUFHLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUN4RCxLQUFpQixFQUNqQixFQUFFOztJQUNGLG9EQUFvRDtJQUNwRCxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsMENBQUUsTUFBTSxNQUFLLEdBQUc7UUFBRSxPQUFPLElBQUksQ0FBQTtJQUMvQyxNQUFNLEtBQUssQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQUVZLFFBQUEsYUFBYSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7SUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRO1FBQUUsTUFBTSxDQUFDLENBQUE7SUFFeEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQWUsQ0FBQTtJQUNwQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsUUFBUyxDQUFBO0lBRTVCLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUNsQixNQUFNLElBQUkseUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDakM7SUFFRCxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxJQUFJLG9CQUFjLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDNUI7SUFFRCxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDbEIsTUFBTSxJQUFJLG9CQUFjLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDNUI7SUFFRCxNQUFNLENBQUMsQ0FBQTtBQUNULENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25FcnJvciwgRm9yYmlkZGVuRXJyb3IsIFVzZXJJbnB1dEVycm9yIH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG5pbnRlcmZhY2UgQ3JlYXRlT3JVcGRhdGVTY2hlbWFSZXNwb25zZSB7XG4gIE1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgdGhyb3dJZk5vdE1vZGlmaWVkID0gKGVycm9yOiBBeGlvc0Vycm9yKSA9PiB7XG4gIC8vIDMwNCBtZWFucyBkb2N1bWVudCB3YXMgbm90IHVwZGF0ZWQgdGhlcmVmb3JlIHdlIGRvIG5vdCB0cmVhdCBhcyBhbiBlcnJvclxuICBpZiAoZXJyb3IucmVzcG9uc2U/LnN0YXR1cyAhPT0gMzA0KSB0aHJvdyBlcnJvclxufVxuXG5leHBvcnQgY29uc3QgcmV0dXJuRG9jdW1lbnRJZE9yVHJob3cgPSAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcbiAgdGhyb3dJZk5vdE1vZGlmaWVkKGVycm9yKVxuXG4gIHJldHVybiBlcnJvci5yZXNwb25zZT8uaGVhZGVycz8uWyd4LXZ0ZXgtZG9jdW1lbnQtaWQnXSA/PyAnJ1xufVxuXG5leHBvcnQgY29uc3QgcmV0dXJuTWVzc2FnZU9yVGhyb3cgPSAoXG4gIGVycm9yOiBBeGlvc0Vycm9yXG4pOiBDcmVhdGVPclVwZGF0ZVNjaGVtYVJlc3BvbnNlID0+IHtcbiAgdGhyb3dJZk5vdE1vZGlmaWVkKGVycm9yKVxuXG4gIHJldHVybiB7IE1lc3NhZ2U6ICdOb3QgTW9kaWZpZWQnIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJldHVybkRhdGFJZkNvbmZsaWN0T3JUaHJvdyA9IChkYXRhOiBhbnkpID0+IChcbiAgZXJyb3I6IEF4aW9zRXJyb3JcbikgPT4ge1xuICAvLyBJZiBTS1UgYWxyZWFkeSBleGlzdHMgY2F0YWxvZyBBUEkgd2lsbCByZXR1cm4gNDA5XG4gIGlmIChlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDkpIHJldHVybiBkYXRhXG4gIHRocm93IGVycm9yXG59XG5cbmV4cG9ydCBjb25zdCBzdGF0dXNUb0Vycm9yID0gKGU6IGFueSkgPT4ge1xuICBpZiAoIWUucmVzcG9uc2UpIHRocm93IGVcblxuICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlIGFzIEF4aW9zRXJyb3JcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHJlc3BvbnNlIVxuXG4gIGlmIChzdGF0dXMgPT09IDQwMSkge1xuICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKGUpXG4gIH1cblxuICBpZiAoc3RhdHVzID09PSA0MDMpIHtcbiAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3IoZSlcbiAgfVxuXG4gIGlmIChzdGF0dXMgPT09IDQwMCkge1xuICAgIHRocm93IG5ldyBVc2VySW5wdXRFcnJvcihlKVxuICB9XG5cbiAgdGhyb3cgZVxufVxuIl19