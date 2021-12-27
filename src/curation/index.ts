import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
      Card
    , CardParams
} from './types';

const path = '/curation';

export class Curation extends Base {

    getCuration (params:CardParams) {
        
        let query = `${path}/type/${params.type}`;

        if (params) {
            query += qs.stringify(params, '?');
        }

        return this.get<string>(query);
    }

}