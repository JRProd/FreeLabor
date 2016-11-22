import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { Login } from './loginpage/loginpage.component';
import { EventList } from './eventlist/eventlist.component';
import { Event } from './eventpage/event.component';
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
            { path: 'np', component: NonProfit },
            {path: 'v', component: Volunteer},
            { path: '', component: Login },
            { path: 'e', component: Event }
            ]) 
    ],    
    declarations:  [
        WebPageComponent, 
        NonProfit,
        EventList,
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