"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const form_data_1 = __importDefault(require("form-data"));
const api_1 = require("@vtex/api");
const errors_1 = require("../../utils/errors");
class MasterDataV1 extends api_1.MasterData {
    constructor(ctx, options) {
        super(ctx, options);
        this.getPartnerByName = (partnerName, config = {}) => {
            var _a;
            const { segmentToken, authToken } = this.context;
            const segmentTokenCookie = segmentToken
                ? `vtex_segment=${segmentToken};`
                : '';
            const authCookie = authToken
                ? `VtexIdclientAutCookie=${authToken}`
                : '';
            config.headers = {
                ...config.headers,
                ...(_a = this.options) === null || _a === void 0 ? void 0 : _a.headers,
                Cookie: `${segmentTokenCookie}${authCookie}`,
            };
            return this.http.get(`/PN/search?_fields=email&_where=name="${encodeURI(partnerName)}"`, config).catch(errors_1.statusToError);
        };
    }
    saveAttachment({ id, file, field, dataEntity }, tracingConfig) {
        const metric = 'masterdata-saveAttachment';
        const formData = new form_data_1.default();
        formData.append('file', file);
        return this.http.post(`${dataEntity}/documents/${id}/${field}/attachments`, formData, {
            metric,
            headers: formData.getHeaders(),
            tracing: {
                requestSpanNameSuffix: metric,
                ...tracingConfig === null || tracingConfig === void 0 ? void 0 : tracingConfig.tracing,
            },
        });
    }
}
exports.default = MasterDataV1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9jbGllbnRzL01hc3RlckRhdGFWMS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGVBQWU7QUFDZiwwREFBZ0M7QUFDaEMsbUNBTWtCO0FBRWxCLCtDQUFrRDtBQVlsRCxNQUFxQixZQUFhLFNBQVEsZ0JBQVU7SUFDbEQsWUFBbUIsR0FBYyxFQUFFLE9BQXlCO1FBQzFELEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7UUEyQmQscUJBQWdCLEdBQUcsQ0FBQyxXQUFtQixFQUFFLFNBQXdCLEVBQUUsRUFBRSxFQUFFOztZQUM1RSxNQUFNLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7WUFDaEQsTUFBTSxrQkFBa0IsR0FBRyxZQUFZO2dCQUNyQyxDQUFDLENBQUMsZ0JBQWdCLFlBQVksR0FBRztnQkFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUVKLE1BQU0sVUFBVSxHQUFHLFNBQVM7Z0JBQzVCLENBQUMsQ0FBQyx5QkFBeUIsU0FBUyxFQUFFO2dCQUN0QyxDQUFDLENBQUMsRUFBRSxDQUFBO1lBRU4sTUFBTSxDQUFDLE9BQU8sR0FBRztnQkFDZixHQUFHLE1BQU0sQ0FBQyxPQUFPO2dCQUNqQixTQUFHLElBQUksQ0FBQyxPQUFPLDBDQUFFLE9BQU87Z0JBQ3hCLE1BQU0sRUFBRSxHQUFHLGtCQUFrQixHQUFHLFVBQVUsRUFBRTthQUM3QyxDQUFBO1lBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIseUNBQXlDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUNsRSxNQUFNLENBQ1AsQ0FBQyxLQUFLLENBQUMsc0JBQWEsQ0FBQyxDQUFBO1FBQ3hCLENBQUMsQ0FBQTtJQTlDRCxDQUFDO0lBRU0sY0FBYyxDQUNuQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBdUIsRUFDcEQsYUFBb0M7UUFFcEMsTUFBTSxNQUFNLEdBQUcsMkJBQTJCLENBQUE7UUFFMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFFL0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsR0FBRyxVQUFVLGNBQWMsRUFBRSxJQUFJLEtBQUssY0FBYyxFQUNwRCxRQUFRLEVBQ1I7WUFDRSxNQUFNO1lBQ04sT0FBTyxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsT0FBTyxFQUFFO2dCQUNQLHFCQUFxQixFQUFFLE1BQU07Z0JBQzdCLEdBQUcsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLE9BQU87YUFDMUI7U0FDRixDQUNGLENBQUE7SUFDSCxDQUFDO0NBdUJGO0FBbERELCtCQWtEQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gJ2Zvcm0tZGF0YSdcbmltcG9ydCB7XG4gIE1hc3RlckRhdGEsXG4gIEluc3RhbmNlT3B0aW9ucyxcbiAgSU9Db250ZXh0LFxuICBSZXF1ZXN0VHJhY2luZ0NvbmZpZyxcbiAgUmVxdWVzdENvbmZpZ1xufSBmcm9tICdAdnRleC9hcGknXG5cbmltcG9ydCB7IHN0YXR1c1RvRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9lcnJvcnMnXG5cbi8vIFR5cGluZ1xuaW1wb3J0IHR5cGUgeyBSZWFkU3RyZWFtIH0gZnJvbSAnZnMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZUF0dGFjaG1lbnRJbnB1dCB7XG4gIGlkOiBzdHJpbmdcbiAgZmllbGQ6IHN0cmluZ1xuICBkYXRhRW50aXR5OiBzdHJpbmdcbiAgZmlsZTogUmVhZFN0cmVhbVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXN0ZXJEYXRhVjEgZXh0ZW5kcyBNYXN0ZXJEYXRhIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKGN0eDogSU9Db250ZXh0LCBvcHRpb25zPzogSW5zdGFuY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoY3R4LCBvcHRpb25zKVxuICB9XG5cbiAgcHVibGljIHNhdmVBdHRhY2htZW50KFxuICAgIHsgaWQsIGZpbGUsIGZpZWxkLCBkYXRhRW50aXR5IH06IFNhdmVBdHRhY2htZW50SW5wdXQsXG4gICAgdHJhY2luZ0NvbmZpZz86IFJlcXVlc3RUcmFjaW5nQ29uZmlnXG4gICkge1xuICAgIGNvbnN0IG1ldHJpYyA9ICdtYXN0ZXJkYXRhLXNhdmVBdHRhY2htZW50J1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIGAke2RhdGFFbnRpdHl9L2RvY3VtZW50cy8ke2lkfS8ke2ZpZWxkfS9hdHRhY2htZW50c2AsXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIHtcbiAgICAgICAgbWV0cmljLFxuICAgICAgICBoZWFkZXJzOiBmb3JtRGF0YS5nZXRIZWFkZXJzKCksXG4gICAgICAgIHRyYWNpbmc6IHtcbiAgICAgICAgICByZXF1ZXN0U3Bhbk5hbWVTdWZmaXg6IG1ldHJpYyxcbiAgICAgICAgICAuLi50cmFjaW5nQ29uZmlnPy50cmFjaW5nLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJ0bmVyQnlOYW1lID0gKHBhcnRuZXJOYW1lOiBzdHJpbmcsIGNvbmZpZzogUmVxdWVzdENvbmZpZyA9IHt9KSA9PiB7XG4gICAgY29uc3QgeyBzZWdtZW50VG9rZW4sIGF1dGhUb2tlbiB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3Qgc2VnbWVudFRva2VuQ29va2llID0gc2VnbWVudFRva2VuXG4gICAgICA/IGB2dGV4X3NlZ21lbnQ9JHtzZWdtZW50VG9rZW59O2BcbiAgICAgIDogJydcblxuICAgICAgY29uc3QgYXV0aENvb2tpZSA9IGF1dGhUb2tlblxuICAgICAgPyBgVnRleElkY2xpZW50QXV0Q29va2llPSR7YXV0aFRva2VufWBcbiAgICAgIDogJydcblxuICAgIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgICAgLi4uY29uZmlnLmhlYWRlcnMsXG4gICAgICAuLi50aGlzLm9wdGlvbnM/LmhlYWRlcnMsXG4gICAgICBDb29raWU6IGAke3NlZ21lbnRUb2tlbkNvb2tpZX0ke2F1dGhDb29raWV9YCxcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IGVtYWlsOiBzdHJpbmcgfVtdPihcbiAgICAgIGAvUE4vc2VhcmNoP19maWVsZHM9ZW1haWwmX3doZXJlPW5hbWU9XCIke2VuY29kZVVSSShwYXJ0bmVyTmFtZSl9XCJgLFxuICAgICAgY29uZmlnXG4gICAgKS5jYXRjaChzdGF0dXNUb0Vycm9yKVxuICB9XG59XG4iXX0=