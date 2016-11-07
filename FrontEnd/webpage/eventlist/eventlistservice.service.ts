import { EventProfile } from '../eventpage/eventprofile.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EventListService {

    eventList: EventProfile;

    constructor()
    {
    }
}
