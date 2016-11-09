import { Component , OnInit} from '@angular/core';

import { EventService } from './event.service';

import 'rxjs/add/operator/map'


@Component({
  selector: 'event',
  templateUrl: './webpage/eventpage/event.html',
  styleUrls: [ './webpage/eventpage/event.css' ],
  providers: [ EventService ]
})

export class Event{
    profile: EventService;

    title: string;
    location: string;
    date: string;
    description: string;
    imageUrl: string;
    orgName: string;
    maxAttendees: number;

    attendees: Array<Object>;

    result: Event;
    errorMessage: string;

    constructor(private eventService: EventService) { }

    ngOnInit()
    {
        this.getEvent();
    }

    getEvent()
    {
        this.eventService.getEvent()
                             .subscribe( res => this.result=res,
                                         error =>  console.log(error),
                                         () => this.defineProfile());   
    }

    defineProfile()
    {
        this.title = this.result.title;
        this.location = this.result.location;
        this.date = this.result.date;
        this.description = this.result.description;
        this.imageUrl = this.result.imageUrl;
        this.orgName = this.result.orgName;
        this.attendees = this.result.attendees;
        this.maxAttendees = this.result.maxAttendees;
    }

    addVolunteer()
    {

    }
}
