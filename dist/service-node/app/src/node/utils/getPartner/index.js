"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartner = void 0;
// Dependencies
const lodash_1 = require("lodash");
// Utils
const getAttachmentURL_1 = require("../getAttachmentURL");
exports.getPartner = async (account, ctx) => {
    const [document] = await ctx.clients.masterdata.searchDocuments({
        dataEntity: 'PN',
        fields: [
            'id',
            'name',
            'email',
            'imgFile',
            'status',
            'account',
            'website',
            'description',
            'types',
            'regions',
            'categories',
            'subcategories',
        ],
        where: `account=${account}`,
        pagination: {
            page: 1,
            pageSize: 1,
        },
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
                dataEntity: 'PN',
                id: document.id,
                host: ctx.vtex.host,
            }),
        };
    }
    return document;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS91dGlscy9nZXRQYXJ0bmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGVBQWU7QUFDZixtQ0FBNkI7QUFLN0IsUUFBUTtBQUNSLDBEQUFzRDtBQVF6QyxRQUFBLFVBQVUsR0FBZSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBVztRQUN4RSxVQUFVLEVBQUUsSUFBSTtRQUNoQixNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osTUFBTTtZQUNOLE9BQU87WUFDUCxTQUFTO1lBQ1QsUUFBUTtZQUNSLFNBQVM7WUFDVCxTQUFTO1lBQ1QsYUFBYTtZQUNiLE9BQU87WUFDUCxTQUFTO1lBQ1QsWUFBWTtZQUNaLGVBQWU7U0FDaEI7UUFDRCxLQUFLLEVBQUUsV0FBVyxPQUFPLEVBQUU7UUFDM0IsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsQ0FBQztTQUNaO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxRQUFRLEVBQUU7UUFDWixNQUFNLHNCQUFzQixHQUFHLGFBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBRTFELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQTtRQUVsQyxPQUFPO1lBQ0wsR0FBRyxzQkFBc0I7WUFDekIsTUFBTSxFQUFFLG1DQUFnQixDQUFDO2dCQUN2QixRQUFRO2dCQUNSLEtBQUssRUFBRSxTQUFTO2dCQUNoQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQWM7YUFDOUIsQ0FBQztTQUNILENBQUE7S0FDRjtJQUVELE9BQU8sUUFBUSxDQUFBO0FBQ2pCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlcGVuZGVuY2llc1xuaW1wb3J0IHsgb21pdCB9IGZyb20gJ2xvZGFzaCdcblxuLy8gVHlwaW5nXG5pbXBvcnQgeyBJUGFydG5lciB9IGZyb20gJy4uLy4uL3R5cGluZ3MvcGFydG5lcidcblxuLy8gVXRpbHNcbmltcG9ydCB7IGdldEF0dGFjaG1lbnRVUkwgfSBmcm9tICcuLi9nZXRBdHRhY2htZW50VVJMJ1xuXG5pbnRlcmZhY2UgR2V0UGFydG5lciB7XG4gIChhY2NvdW50OiBJUGFydG5lclsnYWNjb3VudCddLCBjdHg6IENvbnRleHQpOiBQcm9taXNlPFxuICAgIE9taXQ8SVBhcnRuZXIsICdpbWdGaWxlJz4gfCB1bmRlZmluZWRcbiAgPlxufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFydG5lcjogR2V0UGFydG5lciA9IGFzeW5jIChhY2NvdW50LCBjdHgpID0+IHtcbiAgY29uc3QgW2RvY3VtZW50XSA9IGF3YWl0IGN0eC5jbGllbnRzLm1hc3RlcmRhdGEuc2VhcmNoRG9jdW1lbnRzPElQYXJ0bmVyPih7XG4gICAgZGF0YUVudGl0eTogJ1BOJyxcbiAgICBmaWVsZHM6IFtcbiAgICAgICdpZCcsXG4gICAgICAnbmFtZScsXG4gICAgICAnZW1haWwnLFxuICAgICAgJ2ltZ0ZpbGUnLFxuICAgICAgJ3N0YXR1cycsXG4gICAgICAnYWNjb3VudCcsXG4gICAgICAnd2Vic2l0ZScsXG4gICAgICAnZGVzY3JpcHRpb24nLFxuICAgICAgJ3R5cGVzJyxcbiAgICAgICdyZWdpb25zJyxcbiAgICAgICdjYXRlZ29yaWVzJyxcbiAgICAgICdzdWJjYXRlZ29yaWVzJyxcbiAgICBdLFxuICAgIHdoZXJlOiBgYWNjb3VudD0ke2FjY291bnR9YCxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgcGFnZVNpemU6IDEsXG4gICAgfSxcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQpIHtcbiAgICBjb25zdCBkb2N1bWVudFdpdGhvdXRJbWdGaWxlID0gb21pdChkb2N1bWVudCwgWydpbWdGaWxlJ10pXG5cbiAgICBjb25zdCBbZmlsZU5hbWVdID0gKGRvY3VtZW50LmltZ0ZpbGUgfHwgJycpXG4gICAgICAuc3BsaXQoJywnKVxuICAgICAgLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ3t9JylcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kb2N1bWVudFdpdGhvdXRJbWdGaWxlLFxuICAgICAgaW1nVVJMOiBnZXRBdHRhY2htZW50VVJMKHtcbiAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgIGZpZWxkOiAnaW1nRmlsZScsXG4gICAgICAgIGRhdGFFbnRpdHk6ICdQTicsXG4gICAgICAgIGlkOiBkb2N1bWVudC5pZCxcbiAgICAgICAgaG9zdDogY3R4LnZ0ZXguaG9zdCBhcyBzdHJpbmcsXG4gICAgICB9KSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9jdW1lbnRcbn1cbiJdfQ==