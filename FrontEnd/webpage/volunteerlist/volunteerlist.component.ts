import { Component, Input } from '@angular/core';

import { VolunteerService } from '../volunteerpage/volunteer.service';
import { VolunteerListService } from './volunteerlistservice.service';

@Component({
  selector: 'volunteer-list',
  templateUrl: './webpage/volunteerlist/volunteerlist.html',
  styleUrls:[ './webpage/volunteerlist/volunteerlist.html'],
  providers: [ VolunteerService, VolunteerListService]
})

export class VolunteerList{

  @Input()
  volunteerListService: VolunteerListService;
  constructor() {}
}