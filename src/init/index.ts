import qs from 'querystringify';
import { Base, Pagingation } from '../base';
import { 
    initParams
} from './types';

const path = '/init';

export class Init extends Base {
    
    init(params:initParams, accessToken:string) {

        const query = `${path}`;

        return this.post<string, object>(query, params, accessToken);

    }

}