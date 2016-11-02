import { NgModule }      from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { NonProfit } from './nonprofitpage/nonprofit.component';
import { HomeBar } from './home-bar/home-bar.component';
import { Footer } from './footer/footer.component';

import { HttpModule } from '@angular/http';

@NgModule({    
	imports:      [ BrowserModule , HttpModule],    
    declarations:  [ NonProfit , HomeBar, Footer],    
    bootstrap: [ NonProfit ]
})    

export class AppModule {   
}