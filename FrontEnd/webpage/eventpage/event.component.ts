import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from './event.service';

import 'rxjs/add/operator/map'


@Component({
  selector: 'event',
  templateUrl: './webpage/eventpage/event.html',
  styleUrls: [ './webpage/eventpage/event.css' ],
  providers: [ EventService ]
})

export class Event
{
    constructor(private eventService: EventService, private route: ActivatedRoute) 
    { 
        this.route.params.forEach((param: Params) => {
            eventService.id = +param['eventId'];
        })
        eventService.ngOnInit();
    }
}
