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
import { VolunteerList } from './volunteerlist/volunteerlist.component';
import { HomeBar } from './homebar/homebar.component';
import { Footer } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component'


import { HttpModule } from '@angular/http';

@NgModule({    
	imports: [ 
        BrowserModule , 
        HttpModule, 
        RouterModule.forRoot([

            { path: 'nonprofit/:id', component: NonProfit },
            { path: 'volunteer/:id', component: Volunteer },
            { path: 'event/:id', component: Event },
            { path: 'home', component: LandingComponent },
            { path: '', component: LandingComponent },
            { path: 'login', component: Login },

            ]) 
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit,
        NonProfitList,
        Volunteer,
        VolunteerList,
        LandingComponent,
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