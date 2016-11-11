import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { WebPageComponent } from './webpage.component';
import { EventList } from './eventlist/eventlist.component';
import { Event } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';
import { HomeBar } from './home-bar/home-bar.component';
import { Footer } from './footer/footer.component';

import { HttpModule } from '@angular/http';


@NgModule({    
<<<<<<< HEAD
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
=======
	imports:      [ BrowserModule , HttpModule],    
    declarations:  [ NonProfit, EventPageComponent, HomeBar, Footer ],    
    bootstrap: [ NonProfit, EventPageComponent ]
>>>>>>> b78f5553595184295a70e0cfbe704213e6003775
})    

export class AppModule {   
}