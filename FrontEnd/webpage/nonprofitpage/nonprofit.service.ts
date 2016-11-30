import { EventList } from '../eventlist/eventlist.component';
import { EventListService } from '../eventlist/eventlistservice.service';
import { Injectable , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { NonProfit } from './nonprofit.component';

@Injectable()
export class NonProfitService implements OnInit
{
    private nonProfitUrl = 'https://localhost:8080/org'
    private obser : Observable<NonProfitService>;

    name: string;
    username: string;

    missionStatement: string;
    otherInfo: string;

    splashImageURL: string
    imageURL: string;

    eventList: EventListService;

    errorMessage: string;

    constructor(private http: Http, private router: ActivatedRoute) 
    {
        this.eventList = new EventListService;
    }

    ngOnInit()
    {
        this.router.params.subscribe(params => {
            this.username = params['username'];
        })

        //Request GET from URL
        this.http.get(`${this.nonProfitUrl}/${this.username}`)
                    //Map Response to JSON
                    .map(this.extractData)
                    //Catch error if ocurred
                    .catch(this.handleError)
        //Subscribe to the observable when Request is recieved (Still part of method chain)
        .subscribe(
                    //Create a function to set local variables to
                    res => {this.name = res.name;
                            this.username = res.username;
                            this.missionStatement = res.missionStatement;
                            this.otherInfo = res.otherInfo;
                            this.splashImageURL = res.splashImageURL;
                            this.imageURL = res.imageURL;
                            this.eventList.importList(res.condensedEvents);
                            console.log(EventList);
                            },
                    //Set function to catch error
                    error =>  console.log(error)
        );
        //Data will be updated after request is finished
    }

    private extractData(res: Response)
    {
        let body = res.json()
        return body || { };
    }

    private handleError (error: Response | any) {
        console.log("ERROR")
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