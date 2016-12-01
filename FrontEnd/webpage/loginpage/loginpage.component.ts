import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import globals = require('../globals');

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'login-page',
    templateUrl: './webpage/loginpage/loginpage.html',
    styleUrls: ['./webpage/loginpage/loginpage.css' ],
})

export class Login
{
    private userURL = "http://localhost:8080/user";
    private orgURL = "http://localhost:8080/org";

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
                    globals.usernameGlobal = username;
                    globals.org = false;
                    globals.logIn = true;
                    this.router.navigate(['/user', username]);
                });
    }

    loginOrg(username: string, password: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        let loginAttempt = {username, password};
        console.log(loginAttempt);

        this.http.post(`${this.orgURL}/login`,loginAttempt, options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(r=>{
                    globals.usernameGlobal = username;
                    globals.org = true;
                    globals.logIn = true;
                    this.router.navigate(['/org', username]);
                });
    }

    createUser(firstName: string, lastName: string, email: string, username: string, password: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        console.log(options);

        let tempNewUser = {firstName, lastName, email, username, password};
        console.log(JSON.stringify(tempNewUser));
        this.http.post(this.userURL, JSON.stringify(tempNewUser), options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(r=>{
                    globals.usernameGlobal = username;
                    globals.org = false;
                    globals.logIn = true;
                    this.router.navigate(['/user', username])
                });
    }

    createOrg(name: string, email: string, username: string, password: string, phone: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        console.log(options);

        let tempNewUser = {name, email, username, password, phone};
        console.log(JSON.stringify(tempNewUser));
        this.http.post(this.orgURL, JSON.stringify(tempNewUser), options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(r=>{
                    globals.usernameGlobal = username;
                    globals.org = true;
                    globals.logIn = true;
                    this.router.navigate(['/org', username])
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