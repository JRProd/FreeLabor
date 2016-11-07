import { Component , OnInit} from '@angular/core';

import { NonProfitService } from './nonprofit.service';

import 'rxjs/add/operator/map'

@Component({
    selector: 'non-profit',
    templateUrl: './webpage/nonprofitpage/nonprofit.html',
    styleUrls: ['./webpage/nonprofitpage/nonprofit.css' ],
    providers: [ NonProfitService ]
})

export class NonProfit implements OnInit
{
    name: string;
    username: string;

    missionStatement: string;
    otherInfo: string;

    imageUrl: string;

    condensedEvents: Array<Object>;
    condensedVolunteers: Array<Object>;

    result: NonProfit;
    errorMessage: string;

    constructor(private nonProfitService: NonProfitService) { }

    ngOnInit()
    {
        this.getNonProfit();
    }

    getNonProfit()
    {
        this.nonProfitService.getNonProfit()
                             .subscribe( res => this.result=res,
                                         error =>  console.log(error),
                                         () => this.defineProfile());   
    }

    defineProfile()
    {
        this.name = this.result.name;
        this.username = this.result.username;
        
        this.missionStatement = this.result.missionStatement;
        this.otherInfo = this.result.otherInfo;

        this.imageUrl = this.result.imageUrl;

        this.condensedEvents = this.result.condensedEvents;
        this.condensedVolunteers = this.result.condensedVolunteers;
    }

    addEvent()
    {

    }

    addVolunteer()
    {

    }
}
