import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      myStickerParams
    , myStickerOrderParams
} from './types';

const path = '/mysticker';

export class Mysticker extends Base {
    
    mySticker(params:myStickerParams, accessToken:string) {

        let query = `${path}/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

    myStickerHideList(params:myStickerParams, accessToken:string) {
        
        let query = `${path}/hide/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

    myStickerHide(params:myStickerParams, accessToken:string) {
        
        const query = `${path}/hide/${params?.userId}/${params?.packageId}`;

        return this.put<string, any>(query, null, accessToken);

    }

    myStickerOrder(params:myStickerOrderParams, accessToken:string) {
        
        const query = `${path}/order/${params?.userId}`;

        return this.put<string, object>(query, params, accessToken);

    }

    myStickerFavoriteList(params:myStickerParams, accessToken:string) {

        let query = `${path}/favorite/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

    myStickerFavorite(params:myStickerOrderParams, accessToken:string) {
        
        const query = `${path}/favorite/${params?.userId}`;

        return this.put<string, object>(query, params, accessToken);

    }


}