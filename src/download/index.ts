import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      downloadParams
    , downloadListParams
} from './types';

const path = '/download';

export class Download extends Base {
    
    download(params:downloadParams, accessToken:string) {

        let query = `${path}/${params?.packageId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.post<string, any>(query, null, accessToken);

    }

    downloadList(params:downloadListParams, accessToken:string) {

        let query = `${path}/${params.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query, accessToken);

    }

}