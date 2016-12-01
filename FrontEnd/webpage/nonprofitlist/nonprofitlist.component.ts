import { Component, Input } from '@angular/core';

import { NonProfitListService } from './nonprofitlistservice.service';
import { NonProfitService } from '../nonprofitpage/nonprofit.service';

@Component({
    selector: 'nonprofit-list',
    templateUrl: './webpage/nonprofitlist/nonprofitlist.html',
    styleUrls: ['./webpage/nonprofitlist/nonprofitlist.css'],
    providers: [ NonProfitService, NonProfitListService ]
})

export class NonProfitList{
    @Input()
    nonProfitListService: NonProfitListService;
    constructor(){}
}