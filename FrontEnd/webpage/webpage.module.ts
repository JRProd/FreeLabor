import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { EventList } from './eventlist/eventlist.component';
import { EventPageComponent } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HttpModule } from '@angular/http';


@NgModule({    
	imports: [ 
        BrowserModule , 
        HttpModule, 
        RouterModule.forRoot([
            { path: 'np', component: NonProfit },
            {path: 'volunteer', component: VolunteerComponent},
            { path: '', component: WebPageComponent },
            ])
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit, 
        EventPageComponent,
        EventList,
        VolunteerComponent
    ],    
    bootstrap: [ WebPageComponent]
})    

export class AppModule {   
}