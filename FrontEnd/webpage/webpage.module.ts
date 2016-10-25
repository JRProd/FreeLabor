import { NgModule }      from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { NonProfitPage } from './nonprofitpage/nonprofit.component';

@NgModule({    
	imports:      [ BrowserModule ],    
    declarations:  [ NonProfitPage],    
    bootstrap: [ NonProfitPage]
})    

export class AppModule {   
}