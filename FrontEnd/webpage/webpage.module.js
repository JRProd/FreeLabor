"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const router_1 = require('@angular/router');
const webpage_component_1 = require('./webpage.component');
const loginpage_component_1 = require('./loginpage/loginpage.component');
const eventlist_component_1 = require('./eventlist/eventlist.component');
const event_component_1 = require('./eventpage/event.component');
const nonprofitlist_component_1 = require('./nonprofitlist/nonprofitlist.component');
const nonprofit_component_1 = require('./nonprofitpage/nonprofit.component');
const volunteer_component_1 = require('./volunteerpage/volunteer.component');
const volunteerlist_component_1 = require('./volunteerlist/volunteerlist.component');
const homebar_component_1 = require('./homebar/homebar.component');
const footer_component_1 = require('./footer/footer.component');
const http_1 = require('@angular/http');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'nonprofit/:id', component: nonprofit_component_1.NonProfit },
                { path: 'volunteer/:id', component: volunteer_component_1.Volunteer },
                { path: '', component: loginpage_component_1.Login },
                { path: 'event/:id', component: event_component_1.Event }
            ])
        ],
        declarations: [
            webpage_component_1.WebPageComponent,
            nonprofit_component_1.NonProfit,
            nonprofitlist_component_1.NonProfitList,
            volunteer_component_1.Volunteer,
            volunteerlist_component_1.VolunteerList,
            event_component_1.Event,
            eventlist_component_1.EventList,
            homebar_component_1.HomeBar,
            footer_component_1.Footer,
            loginpage_component_1.Login
        ],
        bootstrap: [webpage_component_1.WebPageComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=webpage.module.js.map