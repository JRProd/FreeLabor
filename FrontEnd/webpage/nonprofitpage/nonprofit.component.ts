import { Component } from '@angular/core';

import {NonProfitProfile} from './nonprofitprofile.service';
    
@Component({    
	selector: 'nonprofitpage',
    templateUrl: './webpage/nonprofitpage/nonprofit.html',    
	styleUrls: [ './webpage/nonprofitpage/nonprofit.css' ],
	providers: [ NonProfitProfile ]  
})    

export class NonProfitPage{
    profile: NonProfitProfile;

    events: any[];
    volunteers: any[];

    constructor(profile: NonProfitProfile)
    {
    	this.profile = profile || new NonProfitProfile();
    }

    addEvent(event: any)
    {
    	this.events.push(event);
    }

    addVolunteers(volunteer: any)
    {
    	this.volunteers.push(volunteer);
    }
}