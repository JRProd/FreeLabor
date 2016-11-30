import { EventListService } from '../eventlist/eventlistservice.service';
import { Injectable , OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VolunteerService {

	private volunteerURL = "https:/private-3d0cf-artisanapi.apiary-mock.com/user";

	imageURL: string;
    firstName: string;
    name: string;
	username: string;

	bio: string;

	organizations: any[];
	eventList: EventListService;

	constructor(private http: Http) {
		this.eventList = new EventListService;
	}

	ngOnIinit()
	{
		//Request GET from URL
        this.http.get(this.volunteerURL)
                    //Map Response to JSON
                    .map(this.extractData)
                    //Catch error if ocurred
                    .catch(this.handleError)
        //Subscribe to the observable when Request is recieved (Still part of method chain)
        .subscribe(
                    //Create a function to set local variables to
                    res => {this.firstName = res.firstName;
                            this.name = res.firstName + " " + res.lastName;
                            this.bio = res.bio;
                            this.organizations = res.organizations;
                            this.imageURL = res.imageURL;
                            this.eventList.importList(res.condensedEvents);
							console.log(this.name)
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