import {Injectable} from '@angular/core';

@Injectable()
export class EventProfile {

    orgName: string;    
    title: string;
    id: number;
    imageURL: string;
    date: string;
    time: string;
    location: string;
    description: string;
    attendees: number;
    maxAttendees: number;
    volunteers: any[];


    constructor()
    { }
}
