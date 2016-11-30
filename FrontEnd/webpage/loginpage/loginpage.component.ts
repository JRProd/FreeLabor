import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import globalUsername = require('../globals');

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'login-page',
    templateUrl: './webpage/loginpage/loginpage.html',
    styleUrls: ['./webpage/loginpage/loginpage.css' ],
})

export class Login
{
    private userURL = "http://localhost:8080/user";
    private orgURL = "http://localhost:8080/orgs";

    constructor(private http: Http, private router: Router) 
    { 
    }

    loginUser(username: string, password: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        let loginAttempt = {username, password};
        console.log(loginAttempt);

        this.http.post(`${this.userURL}/login`,loginAttempt, options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(r=>{
                    globalUsername.usernameGlobal = username;
                    this.router.navigate(['/user', username]);
                });
    }

    loginOrg(username: string, password: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
    }

    createUser(fName: string, lName: string, email: string, username: string, password: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        console.log(options);

        let tempNewUser = new NewUser(fName, lName, email, username, password);
        console.log(JSON.stringify(tempNewUser));
        this.http.post(this.userURL, JSON.stringify(tempNewUser), options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(r=>{
                    this.router.navigate(['/user', username])
                });
    }

    private extractData(res: Response)
    {
        let body = res.json();
        console.log("This is the body");
        console.log(body);
        return body.data || { }
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

class NewUser
{
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public username: string,
        public password: string
    )
    { }
}
