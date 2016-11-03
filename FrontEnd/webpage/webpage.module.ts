import { NgModule }      from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { EventPageComponent } from './eventpage/event.component';
import { NonProfit } from './nonprofitpage/nonprofit.component';

import { HttpModule } from '@angular/http';


@NgModule({    
	imports:      [ BrowserModule , HttpModule],    
    declarations:  [ NonProfit, EventPageComponent ],    
    bootstrap: [ NonProfit, EventPageComponent ]
})    

export class AppModule {   
}