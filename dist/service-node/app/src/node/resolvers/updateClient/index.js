"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = void 0;
// Dependencies
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const lodash_1 = require("lodash");
// Utils
const getAttachmentURL_1 = require("../../utils/getAttachmentURL");
const saveAttachment = async (ctx, input, id) => {
    const { name } = input;
    const { createReadStream, filename, encoding, mimetype } = await input.imgFile;
    const saveTo = path_1.default.join(os_1.default.tmpdir(), path_1.default.basename(filename));
    const stream = createReadStream(saveTo);
    const [, ext] = filename.split('.');
    const nameFriendly = name.toLowerCase().replace(/[\s]+/g, '-');
    //@ts-ignore
    stream.fieldname = 'file' + Math.random().toString(16).substring(2);
    //@ts-ignore
    stream.name = stream.filename = `${nameFriendly}.${ext}`;
    //@ts-ignore
    stream.transferEncoding = stream.encoding = encoding;
    //@ts-ignore
    stream.mimeType = stream.mime = mimetype;
    //@ts-ignore
    stream.mimeType = stream.mime = mimetype;
    //@ts-ignore
    stream.path = saveTo;
    await ctx.clients.masterDataV1.saveAttachment({
        id,
        dataEntity: 'PC',
        field: 'imgFile',
        file: stream,
    });
};
exports.updateClient = async (_, { id, input }, ctx) => {
    await ctx.clients.masterdata.updatePartialDocument({
        id,
        dataEntity: 'PC',
        fields: input,
    });
    await saveAttachment(ctx, input, id);
    const clientDocument = await ctx.clients.masterdata.getDocument({
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
    if (clientDocument) {
        await ctx.clients.masterdata.updatePartialDocument({
            id: clientDocument.partnerID,
            dataEntity: 'PN',
            fields: {
                status: 'PENDING',
            },
        });
        const documentWithoutImgFile = lodash_1.omit(clientDocument, ['imgFile']);
        const [fileName] = (clientDocument.imgFile || '')
            .split(',')
            .filter((name) => name !== '{}');
        return {
            ...documentWithoutImgFile,
            imgURL: getAttachmentURL_1.getAttachmentURL({
                fileName,
                field: 'imgFile',
                dataEntity: 'PC',
                id: clientDocument.id,
                host: ctx.vtex.host,
            }),
        };
    }
    return clientDocument;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9yZXNvbHZlcnMvdXBkYXRlQ2xpZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGVBQWU7QUFDZiw0Q0FBbUI7QUFDbkIsZ0RBQXVCO0FBQ3ZCLG1DQUE2QjtBQUs3QixRQUFRO0FBQ1IsbUVBQStEO0FBUy9ELE1BQU0sY0FBYyxHQUFHLEtBQUssRUFDMUIsR0FBWSxFQUNaLEtBQW9CLEVBQ3BCLEVBQVUsRUFDVixFQUFFO0lBQ0YsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUV0QixNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUE7SUFFOUUsTUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxZQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBRTlELE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXZDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFFOUQsWUFBWTtJQUNaLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRW5FLFlBQVk7SUFDWixNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxZQUFZLElBQUksR0FBRyxFQUFFLENBQUE7SUFDeEQsWUFBWTtJQUNaLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUNwRCxZQUFZO0lBQ1osTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQTtJQUN4QyxZQUFZO0lBQ1osTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQTtJQUN4QyxZQUFZO0lBQ1osTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7SUFFcEIsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDNUMsRUFBRTtRQUNGLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxNQUFNO0tBQ2IsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRVksUUFBQSxZQUFZLEdBQUcsS0FBSyxFQUMvQixDQUFNLEVBQ04sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFRLEVBQ25CLEdBQVksRUFDWixFQUFFO0lBQ0YsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztRQUNqRCxFQUFFO1FBQ0YsVUFBVSxFQUFFLElBQUk7UUFDaEIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDLENBQUE7SUFFRixNQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRXBDLE1BQU0sY0FBYyxHQUFHLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFVO1FBQ3ZFLEVBQUU7UUFDRixVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osTUFBTTtZQUNOLFNBQVM7WUFDVCxXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxhQUFhO1lBQ2IsYUFBYTtTQUNkO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxjQUFjLEVBQUU7UUFDbEIsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNqRCxFQUFFLEVBQUUsY0FBYyxDQUFDLFNBQVM7WUFDNUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFO2dCQUNOLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsTUFBTSxzQkFBc0IsR0FBRyxhQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUVoRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQzthQUM5QyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUE7UUFFbEMsT0FBTztZQUNMLEdBQUcsc0JBQXNCO1lBQ3pCLE1BQU0sRUFBRSxtQ0FBZ0IsQ0FBQztnQkFDdkIsUUFBUTtnQkFDUixLQUFLLEVBQUUsU0FBUztnQkFDaEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEVBQUUsRUFBRSxjQUFjLENBQUMsRUFBRTtnQkFDckIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBYzthQUM5QixDQUFDO1NBQ0gsQ0FBQTtLQUNGO0lBRUQsT0FBTyxjQUFjLENBQUE7QUFDdkIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVwZW5kZW5jaWVzXG5pbXBvcnQgb3MgZnJvbSAnb3MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCdcblxuLy8gVHlwaW5nXG5pbXBvcnQgeyBJQ2xpZW50IH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9jbGllbnQnXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBnZXRBdHRhY2htZW50VVJMIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0QXR0YWNobWVudFVSTCdcblxuaW50ZXJmYWNlIEFyZ3Mge1xuICBpZDogSUNsaWVudFsnaWQnXVxuICBpbnB1dDogT21pdDxJQ2xpZW50LCAnaWQnIHwgJ3BhcnRuZXJJRCcgfCAnaW1nRmlsZSc+ICYge1xuICAgIGltZ0ZpbGU6IFByb21pc2U8RmlsZT5cbiAgfVxufVxuXG5jb25zdCBzYXZlQXR0YWNobWVudCA9IGFzeW5jIChcbiAgY3R4OiBDb250ZXh0LFxuICBpbnB1dDogQXJnc1snaW5wdXQnXSxcbiAgaWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gaW5wdXRcblxuICBjb25zdCB7IGNyZWF0ZVJlYWRTdHJlYW0sIGZpbGVuYW1lLCBlbmNvZGluZywgbWltZXR5cGUgfSA9IGF3YWl0IGlucHV0LmltZ0ZpbGVcblxuICBjb25zdCBzYXZlVG8gPSBwYXRoLmpvaW4ob3MudG1wZGlyKCksIHBhdGguYmFzZW5hbWUoZmlsZW5hbWUpKVxuXG4gIGNvbnN0IHN0cmVhbSA9IGNyZWF0ZVJlYWRTdHJlYW0oc2F2ZVRvKVxuXG4gIGNvbnN0IFssIGV4dF0gPSBmaWxlbmFtZS5zcGxpdCgnLicpXG5cbiAgY29uc3QgbmFtZUZyaWVuZGx5ID0gbmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1tcXHNdKy9nLCAnLScpXG5cbiAgLy9AdHMtaWdub3JlXG4gIHN0cmVhbS5maWVsZG5hbWUgPSAnZmlsZScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMilcblxuICAvL0B0cy1pZ25vcmVcbiAgc3RyZWFtLm5hbWUgPSBzdHJlYW0uZmlsZW5hbWUgPSBgJHtuYW1lRnJpZW5kbHl9LiR7ZXh0fWBcbiAgLy9AdHMtaWdub3JlXG4gIHN0cmVhbS50cmFuc2ZlckVuY29kaW5nID0gc3RyZWFtLmVuY29kaW5nID0gZW5jb2RpbmdcbiAgLy9AdHMtaWdub3JlXG4gIHN0cmVhbS5taW1lVHlwZSA9IHN0cmVhbS5taW1lID0gbWltZXR5cGVcbiAgLy9AdHMtaWdub3JlXG4gIHN0cmVhbS5taW1lVHlwZSA9IHN0cmVhbS5taW1lID0gbWltZXR5cGVcbiAgLy9AdHMtaWdub3JlXG4gIHN0cmVhbS5wYXRoID0gc2F2ZVRvXG5cbiAgYXdhaXQgY3R4LmNsaWVudHMubWFzdGVyRGF0YVYxLnNhdmVBdHRhY2htZW50KHtcbiAgICBpZCxcbiAgICBkYXRhRW50aXR5OiAnUEMnLFxuICAgIGZpZWxkOiAnaW1nRmlsZScsXG4gICAgZmlsZTogc3RyZWFtLFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xpZW50ID0gYXN5bmMgKFxuICBfOiBhbnksXG4gIHsgaWQsIGlucHV0IH06IEFyZ3MsXG4gIGN0eDogQ29udGV4dFxuKSA9PiB7XG4gIGF3YWl0IGN0eC5jbGllbnRzLm1hc3RlcmRhdGEudXBkYXRlUGFydGlhbERvY3VtZW50KHtcbiAgICBpZCxcbiAgICBkYXRhRW50aXR5OiAnUEMnLFxuICAgIGZpZWxkczogaW5wdXQsXG4gIH0pXG5cbiAgYXdhaXQgc2F2ZUF0dGFjaG1lbnQoY3R4LCBpbnB1dCwgaWQpXG5cbiAgY29uc3QgY2xpZW50RG9jdW1lbnQgPSBhd2FpdCBjdHguY2xpZW50cy5tYXN0ZXJkYXRhLmdldERvY3VtZW50PElDbGllbnQ+KHtcbiAgICBpZCxcbiAgICBkYXRhRW50aXR5OiAnUEMnLFxuICAgIGZpZWxkczogW1xuICAgICAgJ2lkJyxcbiAgICAgICduYW1lJyxcbiAgICAgICdpbWdGaWxlJyxcbiAgICAgICdwYXJ0bmVySUQnLFxuICAgICAgJ2lzQWN0aXZlJyxcbiAgICAgICdpc1JlbW92ZWQnLFxuICAgICAgJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICdhY2NvdW50TmFtZScsXG4gICAgXSxcbiAgfSlcblxuICBpZiAoY2xpZW50RG9jdW1lbnQpIHtcbiAgICBhd2FpdCBjdHguY2xpZW50cy5tYXN0ZXJkYXRhLnVwZGF0ZVBhcnRpYWxEb2N1bWVudCh7XG4gICAgICBpZDogY2xpZW50RG9jdW1lbnQucGFydG5lcklELFxuICAgICAgZGF0YUVudGl0eTogJ1BOJyxcbiAgICAgIGZpZWxkczoge1xuICAgICAgICBzdGF0dXM6ICdQRU5ESU5HJyxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IGRvY3VtZW50V2l0aG91dEltZ0ZpbGUgPSBvbWl0KGNsaWVudERvY3VtZW50LCBbJ2ltZ0ZpbGUnXSlcblxuICAgIGNvbnN0IFtmaWxlTmFtZV0gPSAoY2xpZW50RG9jdW1lbnQuaW1nRmlsZSB8fCAnJylcbiAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSAne30nKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRvY3VtZW50V2l0aG91dEltZ0ZpbGUsXG4gICAgICBpbWdVUkw6IGdldEF0dGFjaG1lbnRVUkwoe1xuICAgICAgICBmaWxlTmFtZSxcbiAgICAgICAgZmllbGQ6ICdpbWdGaWxlJyxcbiAgICAgICAgZGF0YUVudGl0eTogJ1BDJyxcbiAgICAgICAgaWQ6IGNsaWVudERvY3VtZW50LmlkLFxuICAgICAgICBob3N0OiBjdHgudnRleC5ob3N0IGFzIHN0cmluZyxcbiAgICAgIH0pLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjbGllbnREb2N1bWVudFxufVxuIl19