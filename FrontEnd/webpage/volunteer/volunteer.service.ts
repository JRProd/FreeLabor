import { Injectable } from '@angular/core';

@Injectable()
export class VolunteerService {
	volunteer: any[];

	constructor() {
		this.volunteer = { id: 1, name: 'J', orgsFollowing: 'orgs', eventsAttending: 'events', bio: 'bio', stats: 'stats'};
	}

	getVolunteer(id) : any[] { // add volunteer id parameter
		return this.volunteer;
	}

	getOrgsFollowing(volunteerId) {
		//get the orgs here
	}

	getEventsAttending(volunteerId) {
		//get events here
	}
}