"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
exports.service = async (_, { id, locale }, ctx) => {
    if (locale && locale !== 'pt-BR') {
        return ctx.clients.masterdata.searchDocuments({
            dataEntity: 'TS',
            fields: ['id', 'name', 'description'],
            where: `(parentID=${id} AND locale=${locale})`,
            pagination: {
                page: 1,
                pageSize: 5,
            },
        });
    }
    return ctx.clients.masterdata.getDocument({
        id,
        dataEntity: 'PS',
        fields: ['id', 'name', 'partnerID', 'isActive', 'isRemoved', 'description'],
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRYSxRQUFBLE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBUSxFQUFFLEdBQVksRUFBRSxFQUFFO0lBQzFFLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7UUFDaEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7WUFDNUMsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUM7WUFDckMsS0FBSyxFQUFFLGFBQWEsRUFBRSxlQUFlLE1BQU0sR0FBRztZQUM5QyxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGLENBQUMsQ0FBQTtLQUNIO0lBQ0QsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQVc7UUFDbEQsRUFBRTtRQUNGLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDO0tBQzVFLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFR5cGluZ1xuaW1wb3J0IHsgSVNlcnZpY2UgfSBmcm9tICcuLi8uLi90eXBpbmdzL3NlcnZpY2UnXG5cbmludGVyZmFjZSBBcmdzIHtcbiAgaWQ6IElTZXJ2aWNlWydpZCddXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3Qgc2VydmljZSA9IGFzeW5jIChfOiBhbnksIHsgaWQsIGxvY2FsZSB9OiBBcmdzLCBjdHg6IENvbnRleHQpID0+IHtcbiAgaWYgKGxvY2FsZSAmJiBsb2NhbGUgIT09ICdwdC1CUicpIHtcbiAgICByZXR1cm4gY3R4LmNsaWVudHMubWFzdGVyZGF0YS5zZWFyY2hEb2N1bWVudHMoe1xuICAgICAgZGF0YUVudGl0eTogJ1RTJyxcbiAgICAgIGZpZWxkczogWydpZCcsICduYW1lJywgJ2Rlc2NyaXB0aW9uJ10sXG4gICAgICB3aGVyZTogYChwYXJlbnRJRD0ke2lkfSBBTkQgbG9jYWxlPSR7bG9jYWxlfSlgLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZTogNSxcbiAgICAgIH0sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gY3R4LmNsaWVudHMubWFzdGVyZGF0YS5nZXREb2N1bWVudDxJU2VydmljZT4oe1xuICAgIGlkLFxuICAgIGRhdGFFbnRpdHk6ICdQUycsXG4gICAgZmllbGRzOiBbJ2lkJywgJ25hbWUnLCAncGFydG5lcklEJywgJ2lzQWN0aXZlJywgJ2lzUmVtb3ZlZCcsICdkZXNjcmlwdGlvbiddLFxuICB9KVxufVxuIl19