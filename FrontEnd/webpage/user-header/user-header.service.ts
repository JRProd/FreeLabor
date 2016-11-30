import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import globals = require('../globals')

@Injectable()
export class UserHeader{

    public isLogged: boolean;
    public userURL = "http://localhost:8080/user";

    private username: string;

    private firstName: string;
    private lastName: string;

    constructor(private http: Http)
    {

    }   

    update()
    {
        if(globals.usernameGlobal == "NO_LOG_IN")
        {
            this.isLogged = false;
        }
        else{
            this.isLogged = true;
            this.username = globals.usernameGlobal;
            this.populateUserHeader()
        }
    }

    populateUserHeader()
    {
        this.http.get(`${this.userURL}/${this.username}`)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe((res: UserHeader) => {
                this.firstName = res.firstName;
                this.lastName = res.lastName;
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
}