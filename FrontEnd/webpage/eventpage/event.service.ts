import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Event } from './event.component';

@Injectable()
export class EventService
{
    private eventUrl = 'https://private-73213-artisanapi.apiary-mock.com/orgs/orguserid/events/eventID'

    constructor(private http: Http) 
    {
    }

    getEvent() : Observable<Event>
    {
        return this.http.get(this.eventUrl)
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