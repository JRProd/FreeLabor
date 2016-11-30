import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { Login } from './loginpage/loginpage.component';
import { EventList } from './eventlist/eventlist.component';
import { Event } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HomeBar } from './homebar/homebar.component';
import { Footer } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component'

import { HttpModule } from '@angular/http';

@NgModule({    
	imports: [ 
        BrowserModule , 
        HttpModule, 
        RouterModule.forRoot([
            { path: 'home', component: LandingComponent },
            { path: '', component: LandingComponent },
            { path: 'np', component: NonProfit },
            {path: 'v', component: VolunteerComponent},
            { path: 'login', component: Login },
            { path: 'e', component: Event },
            { path: 'eventlist', component: EventList}
            ]) 
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit,
        EventList,
        VolunteerComponent,
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