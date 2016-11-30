import { Component , OnInit} from '@angular/core';
import { EventService } from './event.service';
import { VolunteerList } from '../volunteerlist/volunteerlist.component';

import 'rxjs/add/operator/map'


@Component({
  selector: 'event',
  templateUrl: './webpage/eventpage/event.html',
  styleUrls: [ './webpage/eventpage/event.css' ],
  providers: [ EventService ]
})

export class Event
{
    constructor(private eventService: EventService) 
    { 
        eventService.ngOnInit();
    }
}
