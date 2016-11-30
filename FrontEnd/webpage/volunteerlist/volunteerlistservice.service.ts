import { Injectable } from '@angular/core';
import { VolunteerList } from './volunteerlist.component';
import { VolunteerService } from '../volunteerpage/volunteer.service';

@Injectable()
export class VolunteerListService{

    volunteerList: VolunteerService[];

    constructor()
    {
        this.volunteerList = new Array<VolunteerService>();
    }

    importList(list: Array<Object>)
    {
        for(let vol of list)
        {
            let newVolunteer = vol as VolunteerService;
            let volunteer = { } as VolunteerService;

            volunteer.name = newVolunteer.name || "NAME";
            volunteer.imageURL = newVolunteer.imageURL || "http://placehold.it/100x100";

            this.volunteerList.push(volunteer);
        }
    }
}