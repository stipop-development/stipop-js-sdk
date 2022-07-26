import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      StickerList
    , StickerSearchParams
    , KeywordList
    , StickerSearchKeywordParams
} from './types';

const path = '/search';

export class SearchSticker extends Base {

    getSearch (params:StickerSearchParams, accessToken:string) {

        let query = `${path}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);
    }

    getKeyword (params:StickerSearchKeywordParams, accessToken:string) {

        let query = `${path}/keyword`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);
    }

    getKeywordRecent (params:StickerSearchKeywordParams, accessToken:string) {

        let query = `${path}/recent`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);
    }

    deleteKeywordAll (params:StickerSearchKeywordParams, accessToken:string) {

        let query = `${path}/recent/${params?.userId}`;

        return this.delete<string>(query, accessToken);
    }

    deleteKeyword (params:StickerSearchKeywordParams, accessToken:string) {

        let query = `${path}/recent/${params?.userId}/${params?.keyword}`;

        return this.delete<string>(query, accessToken);
    }



}