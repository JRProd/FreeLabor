import { Component } from '@angular/core';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'volunteer',
  templateUrl: './webpage/volunteer/volunteer.html',
  styleUrls: [ './webpage/volunteer/volunteer.css' ],
  providers: [ VolunteerService ]
})

export class VolunteerComponent { 

	volunteer: any[];
  bio: string;
  stats: string;
  orgsFollowing: any[];
  eventsAttending: any[];
  name: string;

	constructor(volunteerService : VolunteerService) {
		this.volunteer = volunteerService.getVolunteer(1); //add id parameter
    console.log(this.volunteer);
	}
}
