import { EventList } from './eventlist.component';
import { Injectable } from '@angular/core';
import { EventService } from '../eventpage/event.service';

@Injectable()
export class EventListService {

    eventList: EventService[];

    constructor()
    {
        this.eventList = new Array<EventService>();
    }

    importList(list: Array<Object>)
    {
        for(let evt of list)
        {
            let newEvent = evt as EventService;
            let event = { } as EventService;

            event.orgName = newEvent.orgName || "Default Org";
            event.title = newEvent.title || "New Event";
            event.id = newEvent.id;
            event.imageURL = newEvent.imageURL || "http://placehold.it/100x100";
            event.description = newEvent.description || "Here is a description";
            event.location = newEvent.location || "Undetermined";
            event.date = newEvent.date || "Undetermined";
            event.attendees = newEvent.attendees || 0;
            event.maxAttendees = newEvent.maxAttendees || 9999;

            this.eventList.push(event);
        }
    }
}
