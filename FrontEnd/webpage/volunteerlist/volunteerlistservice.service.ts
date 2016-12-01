import { Injectable } from '@angular/core';
import { VolunteerList } from './volunteerlist.component';
import { VolunteerService } from '../volunteerpage/volunteer.service';
import { Volunteer } from '../volunteerpage/volunteer.component';

@Injectable()
export class VolunteerListService {

    volunteerList: VolunteerService[];

    constructor()
    {
        this.volunteerList = new Array<VolunteerService>();
    }

    importList(list: Array<Object>)
    {
        for(let vol of list)
        {
            let newvolunteer = vol as VolunteerService;
            let volunteer = { } as VolunteerService;

            volunteer.username = newvolunteer.username;
            volunteer.nameUser = newvolunteer.firstName + " "+newvolunteer.lastName || "NAME";
            volunteer.id = newvolunteer.id;
            volunteer.imageURL = newvolunteer.imageURL || "http://placehold.it/100x100";

            this.volunteerList.push(volunteer);
        }
    }
}