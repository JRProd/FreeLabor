import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'login-page',
    templateUrl: './webpage/loginpage/loginpage.html',
    styleUrls: ['./webpage/loginpage/loginpage.css' ],
})

export class Login
{
    private accountURL = "http://localhost:8080/user";

    constructor(private http: Http) 
    { 
    }

    createAccount(fName: string, lName: string, email: string, username: string, password: string)
    {
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});
        console.log(options);

        let tempNewUser = new NewUser(fName, lName, email, username, password);
        console.log(JSON.stringify(tempNewUser));
        this.http.post(this.accountURL, JSON.stringify(tempNewUser), options)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(r=>{});
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
