import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      giftParams
} from './types';

const path = '/gift';

export class Gift extends Base {
    
    sendGift(params:giftParams) {

        let query = `${path}/send/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

    receiveGift(params:giftParams) {

        let query = `${path}/receive/${params?.userId}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);

    }

}