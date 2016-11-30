import { NonProfitList } from './nonprofitlist.component';
import { Injectable } from '@angular/core';
import { NonProfitService } from '../nonprofitpage/nonprofit.service';

@Injectable()
export class NonProfitListService{

    nonProfitList: NonProfitService[];

    constructor()
    {
        this.nonProfitList =new Array<NonProfitService>();
    }

    importList(list: Array<Object>)
    {
        for(let np of list)
        {
            let newNonProfit = np as NonProfitService;
            let nonProfit = { } as NonProfitService;

            nonProfit.name = newNonProfit.name || "Name";
            nonProfit.imageURL = newNonProfit.imageURL || "http://placehold.it/100x100";

            this.nonProfitList.push(nonProfit);
        }
    }
}