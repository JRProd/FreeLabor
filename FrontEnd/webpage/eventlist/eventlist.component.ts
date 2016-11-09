import { Component , Input } from '@angular/core';

import { EventListService } from './eventlistservice.service';
import { EventProfile } from '../eventpage/eventprofile.service';

@Component({
  selector: 'event-list',
  templateUrl: './webpage/eventlist/eventlist.html',
  styleUrls: [ './webpage/eventlist/eventlist.css' ],
  providers: [ EventProfile, EventListService]
})

export class EventList{
  
    @Input()
    eventListService: EventListService;

    constructor()
    { }
}
