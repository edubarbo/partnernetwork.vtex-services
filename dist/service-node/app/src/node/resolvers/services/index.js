"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
exports.services = (_, { partnerID }, ctx) => {
    return ctx.clients.masterdata.searchDocuments({
        dataEntity: 'PS',
        fields: ['id', 'name', 'partnerID', 'isActive', 'isRemoved', 'description'],
        where: `(partnerID=${partnerID} AND isRemoved=false)`,
        pagination: {
            page: 1,
            pageSize: 5,
        },
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvc2VydmljZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT2EsUUFBQSxRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQUUsRUFBRSxTQUFTLEVBQVEsRUFBRSxHQUFZLEVBQUUsRUFBRTtJQUNwRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBVztRQUN0RCxVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQztRQUMzRSxLQUFLLEVBQUUsY0FBYyxTQUFTLHVCQUF1QjtRQUNyRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDO1NBQ1o7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUeXBpbmdcbmltcG9ydCB7IElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9zZXJ2aWNlJ1xuXG5pbnRlcmZhY2UgQXJncyB7XG4gIHBhcnRuZXJJRDogSVNlcnZpY2VbJ3BhcnRuZXJJRCddXG59XG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlcyA9IChfOiBhbnksIHsgcGFydG5lcklEIH06IEFyZ3MsIGN0eDogQ29udGV4dCkgPT4ge1xuICByZXR1cm4gY3R4LmNsaWVudHMubWFzdGVyZGF0YS5zZWFyY2hEb2N1bWVudHM8SVNlcnZpY2U+KHtcbiAgICBkYXRhRW50aXR5OiAnUFMnLFxuICAgIGZpZWxkczogWydpZCcsICduYW1lJywgJ3BhcnRuZXJJRCcsICdpc0FjdGl2ZScsICdpc1JlbW92ZWQnLCAnZGVzY3JpcHRpb24nXSxcbiAgICB3aGVyZTogYChwYXJ0bmVySUQ9JHtwYXJ0bmVySUR9IEFORCBpc1JlbW92ZWQ9ZmFsc2UpYCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgcGFnZVNpemU6IDUsXG4gICAgfSxcbiAgfSlcbn1cbiJdfQ==