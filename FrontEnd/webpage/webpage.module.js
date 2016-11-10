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
const eventlist_component_1 = require('./eventlist/eventlist.component');
const event_component_1 = require('./eventpage/event.component');
const nonprofit_component_1 = require('./nonprofitpage/nonprofit.component');
const volunteer_component_1 = require('./volunteer/volunteer.component');
const http_1 = require('@angular/http');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'np', component: nonprofit_component_1.NonProfit },
                { path: 'volunteer', component: volunteer_component_1.VolunteerComponent },
                { path: '', component: webpage_component_1.WebPageComponent },
            ])
        ],
        declarations: [
            webpage_component_1.WebPageComponent,
            nonprofit_component_1.NonProfit,
            event_component_1.EventPageComponent,
            eventlist_component_1.EventList,
            volunteer_component_1.VolunteerComponent
        ],
        bootstrap: [webpage_component_1.WebPageComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=webpage.module.js.map