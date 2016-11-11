import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { EventList } from './eventlist/eventlist.component';
import { EventPageComponent } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';
import { HomeBar } from './home-bar/home-bar.component';
import { Footer } from './footer/footer.component';

import { HttpModule } from '@angular/http';


@NgModule({    
	imports: [ 
        BrowserModule , 
        HttpModule, 
        RouterModule.forRoot([
            { path: 'np', component: NonProfit },
            { path: '', component: WebPageComponent },
            ])
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit, 
        EventPageComponent,
        EventList
    ],    
    bootstrap: [ WebPageComponent]
})    

export class AppModule {   
}