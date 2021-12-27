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

    getSearch (params?:StickerSearchParams) {

        let query = `${path}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);
    }

    getKeyword (params?:StickerSearchKeywordParams) {

        let query = `${path}/keyword`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);
    }

    getKeywordRecent (params?:StickerSearchKeywordParams) {

        let query = `${path}/recent`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);
    }

    deleteKeywordAll (params?:StickerSearchKeywordParams) {

        let query = `${path}/recent/${params?.userId}`;

        return this.delete<string>(query);
    }

    deleteKeyword (params?:StickerSearchKeywordParams) {

        let query = `${path}/recent/${params?.userId}/${params?.keyword}`;

        return this.delete<string>(query);
    }



}