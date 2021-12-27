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

    getPack (params?:StickerPackListParams) {

        let query = `${path}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);
    }

    getPackInfo (params:StickerPackInfoParams) {

        let query = `${path}/${params.packId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    getPackRecent (params:StickerPackInfoParams) {

        let query = `${path}/recent/${params.userId}`

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    getPackSendSticker (params:StickerPackListParams) {
        
        let query = `${path}/send/${params.userId}`

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    getPackFrequentlySticker (params:StickerPackListParams) {

        let query = `${path}/frequently/${params.userId}`

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

}