import { Component } from '@angular/core';

import { EventProfile } from './eventprofile.service';

@Component({
  selector: 'webpage',
  templateUrl: './webpage/eventpage/event.html',
  styleUrls: [ './webpage/eventpage/event.css' ],
  providers: [ EventProfile ]
})

export class EventPageComponent{
    profile: EventProfile;

    constructor()
    {
    	this.profile = new EventProfile();
    }

    addVolunteers(volunteer: any)
    {
    	this.profile.volunteers.push(volunteer);
    }
}
