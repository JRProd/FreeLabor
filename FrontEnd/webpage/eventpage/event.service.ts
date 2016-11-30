import { Injectable , OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Event } from './event.component';

@Injectable()
export class EventService implements OnInit
{
    private eventUrl = 'https://private-73213-artisanapi.apiary-mock.com/event'
    private obser : Observable<EventService>;

    orgName: string;    
    title: string;
    id: number;
    imageURL: string;
    date: string;
    location: string;
    description: string;
    attendees: number;
    maxAttendees: number;
    volunteers: any[];

    constructor(private http: Http) {}

    ngOnInit()
    {
        //Request GET from URL
        this.http.get(this.eventUrl)
                    //Map Response to JSON
                    .map(this.extractData)
                    //Catch error if ocurred
                    .catch(this.handleError)
        //Subscribe to the observable when Request is recieved (Still part of method chain)
        .subscribe(
                    //Create a function to set local variables to
                    res => {this.title = res.title;
                            this.date = res.dateStart + ' - ' + res.dateEnd;
                            this.location = res.address + ' ' + res.city + ', ' + res.state + ' ' + res.zip;
                            this.description = res.description;
                            this.imageURL = res.imageURL;
                            this.maxAttendees = res.maxAttendees;
                            this.orgName = res.orgName;
                            console.log(res);
                            },
                    //Set function to catch error
                    error =>  console.log(error),
                    () => {console.log(this.title);}
        );
        //Data will be updated after request is finished
    }

    private extractData(res: Response)
    {
        let body = res.json()
        return body || { };
    }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}