import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { EventList } from './eventlist/eventlist.component';
import { Event } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';

import { HttpModule } from '@angular/http';


@NgModule({    
	imports: [ 
        BrowserModule , 
        HttpModule, 
        RouterModule.forRoot([
            { path: 'np', component: NonProfit },
            { path: '', component: WebPageComponent },
            { path: 'e', component: Event }
            ]) 
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit, 
        Event,
        EventList
    ],    
    bootstrap: [ WebPageComponent]
})    

export class AppModule {   
}