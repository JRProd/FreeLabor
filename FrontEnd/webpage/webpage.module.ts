import { NgModule }      from '@angular/core';
import  { BrowserModule } from '@angular/platform-browser';

import { EventPageComponent } from './eventpage/event.component';

@NgModule({    
	imports:      [ BrowserModule ],    
    declarations:  [ EventPageComponent ],    
    bootstrap: [ EventPageComponent ]
})    

export class AppModule {   
}