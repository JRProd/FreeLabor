import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { Login } from './loginpage/loginpage.component';
import { EventList } from './eventlist/eventlist.component';
import { Event } from './eventpage/event.component';
import { NonProfitList } from './nonprofitlist/nonprofitlist.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';
import { Volunteer } from './volunteerpage/volunteer.component';
import { HomeBar } from './homebar/homebar.component';
import { Footer } from './footer/footer.component';

import { HttpModule } from '@angular/http';

@NgModule({    
	imports: [ 
        BrowserModule , 
        HttpModule, 
        RouterModule.forRoot([
            { path: 'nonprofit', component: NonProfit },
            {path: 'volunteer', component: Volunteer},
            { path: '', component: Login },
            { path: 'event', component: Event }
            ]) 
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit,
        NonProfitList,
        Volunteer,
        Event,
        EventList,
        HomeBar,
        Footer,
        Login
    ],    
    bootstrap: [ WebPageComponent]
})    

export class AppModule {   
}