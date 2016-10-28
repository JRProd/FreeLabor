import { NgModule }      from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { NonProfit } from './nonprofitpage/nonprofit.component';

import { HttpModule } from '@angular/http';

@NgModule({    
	imports:      [ BrowserModule , HttpModule],    
    declarations:  [ NonProfit ],    
    bootstrap: [ NonProfit ]
})    

export class AppModule {   
}