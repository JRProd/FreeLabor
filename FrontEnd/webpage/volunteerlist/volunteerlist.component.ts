import { Component, Input } from '@angular/core';
import { VolunteerListService } from './volunteerlistservice.service';
import { VolunteerService } from '../volunteerpage/volunteer.service';

@Component({
  selector: 'volunteer-list',
  templateUrl: './webpage/volunteerlist/volunteerlist.html',
  styleUrls: ['./webpage/volunteerlist/volunteerlist.css'],
  providers: [ VolunteerService, VolunteerListService]
})

export class VolunteerList{
  @Input()
  volunteerListService: VolunteerListService;
  constructor(){}
}