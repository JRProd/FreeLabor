import { Component } from '@angular/core';

import { EventListService } from './eventlistservice.service';
import { EventProfile } from '../eventpage/eventprofile.service';

@Component({
  selector: 'webpage',
  templateUrl: './webpage/eventpage/eventlist.html',
  styleUrls: [ './webpage/eventpage/eventlist.css' ],
  providers: [ EventProfile, EventListService]
})

export class EventList{

    constructor(eventListService: EventListService)
    {
    	
    }
}
