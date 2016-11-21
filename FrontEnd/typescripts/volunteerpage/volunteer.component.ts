import { Component } from '@angular/core';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'volunteer',
  templateUrl: './webpage/volunteerpage/volunteer.html',
  styleUrls: [ './webpage/volunteerpage/volunteer.css' ],
  providers: [ VolunteerService ]
})

export class Volunteer { 

	constructor(private volunteerService : VolunteerService) {
    this.volunteerService.ngOnIinit();
	}
}
