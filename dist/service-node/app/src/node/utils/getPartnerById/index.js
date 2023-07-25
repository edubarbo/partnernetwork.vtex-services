"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnerById = void 0;
// Dependencies
const lodash_1 = require("lodash");
// Utils
const getAttachmentURL_1 = require("../getAttachmentURL");
exports.getPartnerById = async (id, ctx) => {
    var _a;
    const document = await ctx.clients.masterdata.getDocument({
        id,
        dataEntity: 'PN',
        fields: ['_all'],
    });
    if (document) {
        const documentWithoutImgFile = lodash_1.omit(document, ['imgFile']);
        const [fileName] = (document.imgFile || '')
            .split(',')
            .filter((name) => name !== '{}');
        const host = (_a = ctx.vtex.host) !== null && _a !== void 0 ? _a : 'partnernetwork.myvtex.com';
        return {
            ...documentWithoutImgFile,
            imgURL: getAttachmentURL_1.getAttachmentURL({
                host,
                fileName,
                field: 'imgFile',
                dataEntity: 'PN',
                id: document.id,
            }),
        };
    }
    return document;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS91dGlscy9nZXRQYXJ0bmVyQnlJZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxlQUFlO0FBQ2YsbUNBQTZCO0FBSzdCLFFBQVE7QUFDUiwwREFBc0Q7QUFZekMsUUFBQSxjQUFjLEdBQW1CLEtBQUssRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUU7O0lBQzlELE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFXO1FBQ2xFLEVBQUU7UUFDRixVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7S0FDakIsQ0FBQyxDQUFBO0lBRUYsSUFBSSxRQUFRLEVBQUU7UUFDWixNQUFNLHNCQUFzQixHQUFHLGFBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBRTFELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQTtRQUVsQyxNQUFNLElBQUksU0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksbUNBQUksMkJBQTJCLENBQUE7UUFFekQsT0FBTztZQUNMLEdBQUcsc0JBQXNCO1lBQ3pCLE1BQU0sRUFBRSxtQ0FBZ0IsQ0FBQztnQkFDdkIsSUFBSTtnQkFDSixRQUFRO2dCQUNSLEtBQUssRUFBRSxTQUFTO2dCQUNoQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2FBQ2hCLENBQUM7U0FDSCxDQUFBO0tBQ0Y7SUFFRCxPQUFPLFFBQVEsQ0FBQTtBQUNqQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcbmltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnXG5cbi8vIFR5cGluZ1xuaW1wb3J0IHsgSVBhcnRuZXIgfSBmcm9tICcuLi8uLi90eXBpbmdzL3BhcnRuZXInXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBnZXRBdHRhY2htZW50VVJMIH0gZnJvbSAnLi4vZ2V0QXR0YWNobWVudFVSTCdcblxuaW50ZXJmYWNlIFJlc3BvbnNlUGFydG5lciBleHRlbmRzIE9taXQ8SVBhcnRuZXIsICdpbWdGaWxlJz4ge1xuICBpbWdVUkw6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgR2V0UGFydG5lckJ5SWQge1xuICAoaWQ6IElQYXJ0bmVyWydpZCddLCBjdHg6IENvbnRleHQgfCBDdXN0b21FdmVudENvbnRleHQpOiBQcm9taXNlPFxuICAgIFJlc3BvbnNlUGFydG5lciB8IHVuZGVmaW5lZFxuICA+XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXJ0bmVyQnlJZDogR2V0UGFydG5lckJ5SWQgPSBhc3luYyAoaWQsIGN0eCkgPT4ge1xuICBjb25zdCBkb2N1bWVudCA9IGF3YWl0IGN0eC5jbGllbnRzLm1hc3RlcmRhdGEuZ2V0RG9jdW1lbnQ8SVBhcnRuZXI+KHtcbiAgICBpZCxcbiAgICBkYXRhRW50aXR5OiAnUE4nLFxuICAgIGZpZWxkczogWydfYWxsJ10sXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50KSB7XG4gICAgY29uc3QgZG9jdW1lbnRXaXRob3V0SW1nRmlsZSA9IG9taXQoZG9jdW1lbnQsIFsnaW1nRmlsZSddKVxuXG4gICAgY29uc3QgW2ZpbGVOYW1lXSA9IChkb2N1bWVudC5pbWdGaWxlIHx8ICcnKVxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICd7fScpXG5cbiAgICBjb25zdCBob3N0ID0gY3R4LnZ0ZXguaG9zdCA/PyAncGFydG5lcm5ldHdvcmsubXl2dGV4LmNvbSdcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZG9jdW1lbnRXaXRob3V0SW1nRmlsZSxcbiAgICAgIGltZ1VSTDogZ2V0QXR0YWNobWVudFVSTCh7XG4gICAgICAgIGhvc3QsXG4gICAgICAgIGZpbGVOYW1lLFxuICAgICAgICBmaWVsZDogJ2ltZ0ZpbGUnLFxuICAgICAgICBkYXRhRW50aXR5OiAnUE4nLFxuICAgICAgICBpZDogZG9jdW1lbnQuaWQsXG4gICAgICB9KSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnRcbn1cbiJdfQ==