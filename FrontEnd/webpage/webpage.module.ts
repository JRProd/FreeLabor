import { NgModule }      from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { EventPageComponent } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';
import { HomeBar } from './home-bar/home-bar.component';
import { Footer } from './footer/footer.component';

import { HttpModule } from '@angular/http';


@NgModule({    
	imports:      [ BrowserModule , HttpModule],    
    declarations:  [ NonProfit, EventPageComponent, HomeBar, Footer ],    
    bootstrap: [ NonProfit, EventPageComponent ]
})    

export class AppModule {   
}