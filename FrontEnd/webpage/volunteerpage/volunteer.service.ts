import { EventListService } from '../eventlist/eventlistservice.service';
import { NonProfitList } from '../nonprofitlist/nonprofitlist.component';
import { NonProfitListService } from '../nonprofitlist/nonprofitlistservice.service';
import { Injectable , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import globals = require('../globals')


import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VolunteerService{

	private volunteerURL = "http://localhost:8080/user";
    private usersPage: boolean

	imageURL: string;
    firstName: string;
    lastName: string;
    nameUser: string;
	username: string;
    id: number;

	bio: string;

	eventList: EventListService;
    nonProfitList: NonProfitListService;

	constructor(private http: Http, private router: ActivatedRoute) {
		this.eventList = new EventListService;
        this.nonProfitList = new NonProfitListService;
	}

	ngOnIinit()
	{
        this.router.params.subscribe(params => {
            this.username = params['username'];
        })

        if(globals.logIn=== true)
        {
            if(this.username === globals.usernameGlobal)
            {
                this.usersPage = true;
                console.log("Users page");
            }
            else{
                this.usersPage = false;
            }
        }
        else{
            this.usersPage = false;
        }

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
                            this.nameUser = res.firstName + " " + res.lastName;
                            this.username = res.username;
                            this.bio = res.bio || "You need to create a bio!";

                            /* Need to deal with null values
                            this.imageURL = res.imageURL;
                            this.eventList.importList(res.condensedEvents);
                            this.nonProfitList.importList(res.organizations);
							console.log(this.id )
                            */
                            },
                    //Set function to catch error
                    error =>  console.log(error)
        );
        //Data will be updated after request is finished
	}

    editProfile(firstName: string, lastName: string, email: string, bio: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        console.log(options);


        let editedProfile = { firstName, lastName, email, bio};
        console.log("editProfile")
        console.log(editedProfile)

        this.http.patch(`${this.volunteerURL}/${this.username}`, editedProfile, options)
                 .map(this.extractData)
                 .catch(this.handleError)
        .subscribe(r => {
            console.log(r);
        })
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