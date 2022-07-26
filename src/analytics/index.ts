import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
    AnalyticsSendParams
} from './types';

const path = '/analytics';

export class Analytics extends Base {

    sendAnalytics (params:AnalyticsSendParams, accessToken:string) {

        let query = `${path}/send/${params?.stickerId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.post<string, any>(query, null, accessToken);
    }

}