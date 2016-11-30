import { Component } from '@angular/core';
import { VolunteerService } from './volunteer.service';

@Component({
  selector: 'volunteer',
  templateUrl: './webpage/volunteer/volunteer.html',
  styleUrls: [ './webpage/volunteer/volunteer.css' ],
  providers: [ VolunteerService ]
})

export class VolunteerComponent { 

	constructor(private volunteerService : VolunteerService) {
    this.volunteerService.ngOnIinit();
	}
}
