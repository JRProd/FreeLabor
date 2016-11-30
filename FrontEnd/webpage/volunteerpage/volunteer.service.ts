import { EventListService } from '../eventlist/eventlistservice.service';
import { Injectable , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import globals = require('../globals')


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VolunteerService {

	private volunteerURL = "http://localhost:8080/user";

	imageURL: string;
	firstName: string;
	lastName: string;
	username: string;

	bio: string;

	organizations: any[];
	eventList: EventListService;

	constructor(private http: Http, private router: ActivatedRoute) {
		this.eventList = new EventListService;
	}

	ngOnIinit()
	{
        this.router.params.subscribe(params => {
            this.username = params['username'];
        })

		//Request GET from URL
        this.http.get(`${this.volunteerURL}/${this.username}`)
                    //Map Response to JSON
                    .map(this.extractData)
                    //Catch error if ocurred
                    .catch(this.handleError)
        //Subscribe to the observable when Request is recieved (Still part of method chain)
        .subscribe(
                    //Create a function to set local variables to
                    res => {this.firstName = res.firstName;
							this.lastName = res.lastName;
                            this.username = res.username;
                            this.bio = res.bio || "You need to create a bio!";
							console.log(this.firstName + " " + this.lastName)
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

    private printUsername()
    {
        console.log(globals.usernameGlobal);
    }
}