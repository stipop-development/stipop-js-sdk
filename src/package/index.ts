import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      StickerPack
    , Sticker
    , StickerPackListParams 
    , StickerPackInfoParams
} from './types';

const path = '/package';

export class StickerPackage extends Base {

    getPack (params:StickerPackListParams, accessToken:string) {

        let query = `${path}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);
    }

    getPackInfo (params:StickerPackInfoParams, accessToken:string) {

        let query = `${path}/${params.packId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

    getPackRecent (params:StickerPackInfoParams, accessToken:string) {

        let query = `${path}/recent/${params.userId}`

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

    getPackSendSticker (params:StickerPackListParams, accessToken:string) {
        
        let query = `${path}/send/${params.userId}`

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

    getPackFrequentlySticker (params:StickerPackListParams, accessToken:string) {

        let query = `${path}/frequently/${params.userId}`

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

}