"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clients = void 0;
// Dependencies
const lodash_1 = require("lodash");
// Utils
const getAttachmentURL_1 = require("../../utils/getAttachmentURL");
exports.clients = async (_, { partnerID }, ctx) => {
    const documents = await ctx.clients.masterdata.searchDocuments({
        dataEntity: 'PC',
        fields: [
            'id',
            'name',
            'imgFile',
            'partnerID',
            'isActive',
            'isRemoved',
            'description',
            'accountName',
        ],
        where: `(partnerID=${partnerID} AND isRemoved=false)`,
        pagination: {
            page: 1,
            pageSize: 5,
        },
    });
    return documents.map((document) => {
        const documentWithoutImgFile = lodash_1.omit(document, ['imgFile']);
        const [fileName] = (document.imgFile || '')
            .split(',')
            .filter((name) => name !== '{}');
        return {
            ...documentWithoutImgFile,
            imgURL: getAttachmentURL_1.getAttachmentURL({
                fileName,
                field: 'imgFile',
                dataEntity: 'PC',
                id: document.id,
                host: ctx.vtex.host,
            }),
        };
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvY2xpZW50cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxlQUFlO0FBQ2YsbUNBQTZCO0FBSzdCLFFBQVE7QUFDUixtRUFBK0Q7QUFNbEQsUUFBQSxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQU0sRUFBRSxFQUFFLFNBQVMsRUFBUSxFQUFFLEdBQVksRUFBRSxFQUFFO0lBQ3pFLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFVO1FBQ3RFLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixNQUFNO1lBQ04sU0FBUztZQUNULFdBQVc7WUFDWCxVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7WUFDYixhQUFhO1NBQ2Q7UUFDRCxLQUFLLEVBQUUsY0FBYyxTQUFTLHVCQUF1QjtRQUNyRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDO1NBQ1o7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNoQyxNQUFNLHNCQUFzQixHQUFHLGFBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQTtRQUVsQyxPQUFPO1lBQ0wsR0FBRyxzQkFBc0I7WUFDekIsTUFBTSxFQUFFLG1DQUFnQixDQUFDO2dCQUN2QixRQUFRO2dCQUNSLEtBQUssRUFBRSxTQUFTO2dCQUNoQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQWM7YUFDOUIsQ0FBQztTQUNILENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCdcblxuLy8gVHlwaW5nXG5pbXBvcnQgeyBJQ2xpZW50IH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9jbGllbnQnXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBnZXRBdHRhY2htZW50VVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0QXR0YWNobWVudFVSTCdcblxuaW50ZXJmYWNlIEFyZ3Mge1xuICBwYXJ0bmVySUQ6IElDbGllbnRbJ3BhcnRuZXJJRCddXG59XG5cbmV4cG9ydCBjb25zdCBjbGllbnRzID0gYXN5bmMgKF86IGFueSwgeyBwYXJ0bmVySUQgfTogQXJncywgY3R4OiBDb250ZXh0KSA9PiB7XG4gIGNvbnN0IGRvY3VtZW50cyA9IGF3YWl0IGN0eC5jbGllbnRzLm1hc3RlcmRhdGEuc2VhcmNoRG9jdW1lbnRzPElDbGllbnQ+KHtcbiAgICBkYXRhRW50aXR5OiAnUEMnLFxuICAgIGZpZWxkczogW1xuICAgICAgJ2lkJyxcbiAgICAgICduYW1lJyxcbiAgICAgICdpbWdGaWxlJyxcbiAgICAgICdwYXJ0bmVySUQnLFxuICAgICAgJ2lzQWN0aXZlJyxcbiAgICAgICdpc1JlbW92ZWQnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICdhY2NvdW50TmFtZScsXG4gICAgXSxcbiAgICB3aGVyZTogYChwYXJ0bmVySUQ9JHtwYXJ0bmVySUR9IEFORCBpc1JlbW92ZWQ9ZmFsc2UpYCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgcGFnZVNpemU6IDUsXG4gICAgfSxcbiAgfSlcblxuICByZXR1cm4gZG9jdW1lbnRzLm1hcCgoZG9jdW1lbnQpID0+IHtcbiAgICBjb25zdCBkb2N1bWVudFdpdGhvdXRJbWdGaWxlID0gb21pdChkb2N1bWVudCwgWydpbWdGaWxlJ10pXG4gICAgY29uc3QgW2ZpbGVOYW1lXSA9IChkb2N1bWVudC5pbWdGaWxlIHx8ICcnKVxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICd7fScpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZG9jdW1lbnRXaXRob3V0SW1nRmlsZSxcbiAgICAgIGltZ1VSTDogZ2V0QXR0YWNobWVudFVSTCh7XG4gICAgICAgIGZpbGVOYW1lLFxuICAgICAgICBmaWVsZDogJ2ltZ0ZpbGUnLFxuICAgICAgICBkYXRhRW50aXR5OiAnUEMnLFxuICAgICAgICBpZDogZG9jdW1lbnQuaWQsXG4gICAgICAgIGhvc3Q6IGN0eC52dGV4Lmhvc3QgYXMgc3RyaW5nLFxuICAgICAgfSksXG4gICAgfVxuICB9KVxufVxuIl19