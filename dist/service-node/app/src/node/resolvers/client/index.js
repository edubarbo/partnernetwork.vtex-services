"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// Dependencies
const lodash_1 = require("lodash");
// Utils
const getAttachmentURL_1 = require("../../utils/getAttachmentURL");
exports.client = async (_, { id }, ctx) => {
    const document = await ctx.clients.masterdata.getDocument({
        id,
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
    });
    if (document) {
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
    }
    return document;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvY2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGVBQWU7QUFDZixtQ0FBNkI7QUFLN0IsUUFBUTtBQUNSLG1FQUErRDtBQU1sRCxRQUFBLE1BQU0sR0FBRyxLQUFLLEVBQUUsQ0FBTSxFQUFFLEVBQUUsRUFBRSxFQUFRLEVBQUUsR0FBWSxFQUFFLEVBQUU7SUFDakUsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQVU7UUFDakUsRUFBRTtRQUNGLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixNQUFNO1lBQ04sU0FBUztZQUNULFdBQVc7WUFDWCxVQUFVO1lBQ1YsV0FBVztZQUNYLGFBQWE7WUFDYixhQUFhO1NBQ2Q7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLFFBQVEsRUFBRTtRQUNaLE1BQU0sc0JBQXNCLEdBQUcsYUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7UUFFMUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7YUFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFBO1FBRWxDLE9BQU87WUFDTCxHQUFHLHNCQUFzQjtZQUN6QixNQUFNLEVBQUUsbUNBQWdCLENBQUM7Z0JBQ3ZCLFFBQVE7Z0JBQ1IsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ2YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBYzthQUM5QixDQUFDO1NBQ0gsQ0FBQTtLQUNGO0lBRUQsT0FBTyxRQUFRLENBQUE7QUFDakIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBvbWl0IH0gZnJvbSAnbG9kYXNoJ1xuXG4vLyBUeXBpbmdcbmltcG9ydCB7IElDbGllbnQgfSBmcm9tICcuLy4uLy4uL3R5cGluZ3MvY2xpZW50J1xuXG4vLyBVdGlsc1xuaW1wb3J0IHsgZ2V0QXR0YWNobWVudFVSTCB9IGZyb20gJy4uLy4uL3V0aWxzL2dldEF0dGFjaG1lbnRVUkwnXG5cbmludGVyZmFjZSBBcmdzIHtcbiAgaWQ6IElDbGllbnRbJ2lkJ11cbn1cblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGFzeW5jIChfOiBhbnksIHsgaWQgfTogQXJncywgY3R4OiBDb250ZXh0KSA9PiB7XG4gIGNvbnN0IGRvY3VtZW50ID0gYXdhaXQgY3R4LmNsaWVudHMubWFzdGVyZGF0YS5nZXREb2N1bWVudDxJQ2xpZW50Pih7XG4gICAgaWQsXG4gICAgZGF0YUVudGl0eTogJ1BDJyxcbiAgICBmaWVsZHM6IFtcbiAgICAgICdpZCcsXG4gICAgICAnbmFtZScsXG4gICAgICAnaW1nRmlsZScsXG4gICAgICAncGFydG5lcklEJyxcbiAgICAgICdpc0FjdGl2ZScsXG4gICAgICAnaXNSZW1vdmVkJyxcbiAgICAgICdkZXNjcmlwdGlvbicsXG4gICAgICAnYWNjb3VudE5hbWUnLFxuICAgIF0sXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50KSB7XG4gICAgY29uc3QgZG9jdW1lbnRXaXRob3V0SW1nRmlsZSA9IG9taXQoZG9jdW1lbnQsIFsnaW1nRmlsZSddKVxuXG4gICAgY29uc3QgW2ZpbGVOYW1lXSA9IChkb2N1bWVudC5pbWdGaWxlIHx8ICcnKVxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICd7fScpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZG9jdW1lbnRXaXRob3V0SW1nRmlsZSxcbiAgICAgIGltZ1VSTDogZ2V0QXR0YWNobWVudFVSTCh7XG4gICAgICAgIGZpbGVOYW1lLFxuICAgICAgICBmaWVsZDogJ2ltZ0ZpbGUnLFxuICAgICAgICBkYXRhRW50aXR5OiAnUEMnLFxuICAgICAgICBpZDogZG9jdW1lbnQuaWQsXG4gICAgICAgIGhvc3Q6IGN0eC52dGV4Lmhvc3QgYXMgc3RyaW5nLFxuICAgICAgfSksXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvY3VtZW50XG59XG4iXX0=