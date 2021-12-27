import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      myStickerParams
    , myStickerOrderParams
} from './types';

const path = '/mysticker';

export class Mysticker extends Base {
    
    mySticker(params:myStickerParams) {

        let query = `${path}/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    myStickerHideList(params:myStickerParams) {
        
        let query = `${path}/hide/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    myStickerHide(params:myStickerParams) {
        
        const query = `${path}/hide/${params?.userId}/${params?.packageId}`;

        return this.put<string, any>(query, null);

    }

    myStickerOrder(params:myStickerOrderParams) {
        
        const query = `${path}/order/${params?.userId}`;

        return this.put<string, object>(query, params);

    }

    myStickerFavoriteList(params:myStickerParams) {

        let query = `${path}/favorite/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    myStickerFavorite(params:myStickerOrderParams) {
        
        const query = `${path}/favorite/${params?.userId}`;

        return this.put<string, object>(query, params);

    }


}