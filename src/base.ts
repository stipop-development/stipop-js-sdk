global.fetch = require('node-fetch');

export interface Body {
    pageMap?: PageMap
}

export interface PageMap {
    pageNumber: number,
    onePageCountRow: number,
    totalCount: number,
    pageCount: number,
    groupCount: number,
    groupNumber: number,
    pageGroupCount: number,
    startPage: number,
    endPage: number,
    startRow: number,
    endRow: number,
    modNum: number,
    listStartNumber: number
}

export type Pagingation = {
    pageNumber?: number,
    limit?: number
}


export abstract class Base {

    private apiKey: string;
    private devUrl: string = "https://sandbox.stipop.com/";
    private liveUrl: string = "https://messenger.stipop.io/";
    private url:string;
    private version: string;
    private s_meta = `{"platform": "web", "sdk_version": "0.4.0-beta", "os_version":null}`;
    private authorization: string = "";
    
    public sAuth: boolean;
    public appId: string;
    public clientId: string;
    public clientSecret: string;
    public refreshToken: string;

    constructor(apiKey:string, version:string, sAuth:boolean, appId:string, clientId:string, clientSecret:string, refreshToken:string, isDev:boolean) {
        this.apiKey = apiKey;
        this.version = version;
        this.sAuth = sAuth;
        this.appId = appId;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.refreshToken = refreshToken;
        this.url = isDev ? this.devUrl : this.liveUrl;
    }
    
    protected async get<T> (endpoint: T, accessToken: T): Promise<object> {

        if (this.sAuth) {
            this.authorization = `Bearer ${accessToken}`;
        } else {
            this.authorization = "";
        }

        const headers : object = {
            apikey : this.apiKey,
            'Content-Type' : 'application/json',
            s_meta : this.s_meta,
            Authorization: this.authorization
        };

        const config : object = {
            headers,
            method:"get"
        };

        try {

            const res = await fetch(`${this.url}${this.version}${endpoint}`, config);

            const json:any = await res.json();

            if (json.code === '9002' || json.code === '9003') {
                return {
                    header: {
                        code: json.code,
                        status: 'fail',
                        message: json.message
                    },
                    body: null
                }
            }
            
            const header = json.header;
            const body = json.body;

            //에러 핸들링 필요
            if (header.code === '0000') {
                return {
                    header,
                    body 
                }
            } else {
                return {
                    header,
                    body
                }
            }

        } catch (err) { //연결 실패
            console.log(err);
            return {
                header : {
                    code: '1000',
                    status: 'fail',
                    message: 'server error'
                }, 
                body: {}
            }
        }
    }

    protected async post<T, T1> (endpoint: T, body: T1, accessToken: T): Promise<object> {

        if (this.sAuth) {
            this.authorization = `Bearer ${accessToken}`;
        } else {
            this.authorization = "";
        }

        const headers : object = {
            apikey : this.apiKey,
            'Content-type' : 'application/json',
            s_meta : this.s_meta,
            Authorization: this.authorization
        };

        const config : object = {
            headers,
            method:"post",
            body: body ? JSON.stringify(body) : null
        };

        try {
 
            const res = await fetch(`${this.url}${this.version}${endpoint}`, config);

            const json:any = await res.json();
            
            const header = json.header;
            const body = json.body;

            //에러 핸들링 필요
            if (header.code === '0000') {
                return {
                    header,
                    body 
                }
            } else {
                return {
                    header,
                    body
                }
            }

        } catch (err) { //연결 실패
            console.log(err);
            return {
                header : {
                    code: '1000',
                    status: 'fail',
                    message: 'server error'
                }, 
                body: {}
            }
        }
    }

    protected async put<T, T1> (endpoint: T, body: T1, accessToken: T): Promise<object> {

        if (this.sAuth) {
            this.authorization = `Bearer ${accessToken}`;
        } else {
            this.authorization = "";
        }

        const headers : object = {
            apikey : this.apiKey,
            'Content-type' : 'application/json',
            s_meta : this.s_meta,
            Authorization: this.authorization
        };

        const config : object = {
            headers,
            method:"put",
            body: body ? JSON.stringify(body) : null
        };

        try {

            const res = await fetch(`${this.url}${this.version}${endpoint}`, config);

            const json:any = await res.json();
            
            const header = json.header;
            const body = json.body;

            //에러 핸들링 필요
            if (header.code === '0000') {
                return {
                    header,
                    body 
                }
            } else {
                return {
                    header,
                    body
                }
            }

        } catch (err) { //연결 실패
            console.log(err);
            return {
                header : {
                    code: '1000',
                    status: 'fail',
                    message: 'server error'
                }, 
                body: {}
            }
        }
    }

    protected async delete<T> (endpoint: T, accessToken: T): Promise<object> {

        if (this.sAuth) {
            this.authorization = `Bearer ${accessToken}`;
        } else {
            this.authorization = "";
        }

        const headers : object = {
            apikey : this.apiKey,
            'Content-type' : 'application/json',
            s_meta : this.s_meta,
            Authorization: this.authorization
        };

        const config : object = {
            headers,
            method:"delete"
        };

        try {

            const res = await fetch(`${this.url}${this.version}${endpoint}`, config);

            const json:any = await res.json();
            
            const header = json.header;
            const body = json.body;

            //에러 핸들링 필요
            if (header.code === '0000') {
                return {
                    header,
                    body 
                }
            } else {
                return {
                    header,
                    body
                }
            }

        } catch (err) { //연결 실패
            console.log(err);
            return {
                header : {
                    code: '1000',
                    status: 'fail',
                    message: 'server error'
                }, 
                body: {}
            }
        }
    }

}