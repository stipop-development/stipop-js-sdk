import qs from 'querystringify';
import { Base } from '../base';
import { 
    accessParams
} from './types';

const path = '/access';

export class Access extends Base {
    
    access(params:accessParams) {

        const query = `${path}`;

        const body = {
            appId : params.appId,
            userId : params.userId,
            expiryTime : params.expiryTime,
            clientId : this.clientId,
            clientSecret : this.clientSecret,
            refreshToken : this.refreshToken
        }

        return this.post<string, object>(query, body, "");

    }

}