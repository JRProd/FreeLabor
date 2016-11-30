import { Component , OnInit} from '@angular/core';
import { NonProfitService } from './nonprofit.service';
import { EventList } from '../eventlist/eventlist.component';
import { VolunteerList } from '../volunteerlist/volunteerlist.component';

import 'rxjs/add/operator/map'

@Component({
    selector: 'non-profit',
    templateUrl: './webpage/nonprofitpage/nonprofit.html',
    styleUrls: ['./webpage/nonprofitpage/nonprofit.css' ],
    providers: [ NonProfitService ]
})

export class NonProfit
{
    constructor(private nonProfitService: NonProfitService) 
    { 
        nonProfitService.ngOnInit();
    }
}
