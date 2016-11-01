import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
import { AppModule } from './webpage.module';    

const platform = platformBrowserDynamic();  
platform.bootstrapModule(AppModule);  