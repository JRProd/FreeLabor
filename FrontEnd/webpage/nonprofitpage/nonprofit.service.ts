import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NonProfit } from './nonprofit.component';

@Injectable()
export class NonProfitService
{
    private nonProfitUrl = 'https://private-3d0cf-artisanapi.apiary-mock.com/orgs/username'

    constructor(private http: Http) 
    {
    }

    getNonProfit() : Observable<NonProfit>
    {
        return this.http.get(this.nonProfitUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response)
    {
        let body = res.json()
        return body || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) 
        {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else 
        {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}