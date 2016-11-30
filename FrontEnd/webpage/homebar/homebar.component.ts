import { Component } from '@angular/core';


@Component({
    selector: 'home-bar',
    templateUrl: './webpage/homebar/homebar.html',
    styleUrls: ['./webpage/homebar/homebar.css' ],
})

export class HomeBar
{
    private websiteTitle = "Volunteer.io";
    logo: string;
    
    public username: string;

    constructor()
    {

    }
}
