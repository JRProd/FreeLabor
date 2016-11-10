import { EventList } from './eventlist.component';
import { EventProfile } from '../eventpage/eventprofile.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EventListService {

    eventList: EventProfile[];

    constructor()
    {
        this.eventList = new Array<EventProfile>();
    }

    importList(list: Array<Object>)
    {
        for(let evt of list)
        {
            let newEvent = evt as EventProfile;
            let event = { } as EventProfile;

            event.orgName = newEvent.orgName || "Default Org";
            event.title = newEvent.title || "New Event";
            event.id = newEvent.id;
            event.imageURL = newEvent.imageURL || "http://placehold.it/100x100";
            console.log(newEvent.imageURL);
            event.description = newEvent.description || "Here is a description";
            event.location = newEvent.location || "Undetermined";
            event.date = newEvent.date || "Undetermined";
            event.time = newEvent.time || "TBA";
            event.attendees = newEvent.attendees || 0;
            event.maxAttendees = newEvent.maxAttendees || 9999;

            this.eventList.push(event);
        }
    }
}
