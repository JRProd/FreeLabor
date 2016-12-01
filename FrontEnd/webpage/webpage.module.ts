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
import { Contact } from './contactpage/contactpage.component';
import { Donate } from './donatepage/donatepage.component';
import { Info } from './infopage/infopage.component';
import { About } from './aboutpage/aboutpage.component';

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
            { path: 'contact', component: Contact},
            { path: 'donate', component: Donate},
            { path: 'info', component: Info},
            { path: "about", component: About}

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
        Login,
        Contact,
        Donate,
        Info,
        About
    ],    
    bootstrap: [ WebPageComponent]
})    

export class AppModule {   
}