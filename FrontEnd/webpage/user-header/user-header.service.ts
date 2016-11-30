import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import globals = require('../globals')

@Injectable()
export class UserHeader{

    public isLogged: boolean;
    public userURL = "http://localhost:8080/user";
    public orgURL = "http://localhost:8080/org";

    private org: boolean;

    private username: string;

    private firstName: string;
    private lastName: string;

    private name: string;

    constructor(private http: Http)
    {
        this.ngInit();
    }   

    ngInit()
    {
        console.log("User Header initalized!")
        if(globals.logIn === false)
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
        if(globals.org === false)
            this.http.get(`${this.userURL}/${this.username}`)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe((res: UserHeader) => {
                    this.org = false;
                    this.firstName = res.firstName;
                    this.lastName = res.lastName;
                })
        else
            this.http.get(`${this.orgURL}/${this.username}`)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe((res: UserHeader) => {
                    this.org = true;
                    this.name = res.name;
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