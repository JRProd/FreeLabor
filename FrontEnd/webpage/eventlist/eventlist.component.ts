import { Component , Input } from '@angular/core';

import { EventListService } from './eventlistservice.service';
import { EventService } from '../eventpage/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './webpage/eventlist/eventlist.html',
  styleUrls: [ './webpage/eventlist/eventlist.css' ],
  providers: [ EventService, EventListService]
})

export class EventList{
  
    @Input()
    eventListService: EventListService;
    constructor(){}

}
