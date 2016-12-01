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
const eventlist_component_1 = require('../eventlist/eventlist.component');
const eventlistservice_service_1 = require('../eventlist/eventlistservice.service');
const volunteerlistservice_service_1 = require('../volunteerlist/volunteerlistservice.service');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const Rx_1 = require('rxjs/Rx');
let NonProfitService = class NonProfitService {
    constructor(http) {
        this.http = http;
        this.nonProfitUrl = 'https://private-3d0cf-artisanapi.apiary-mock.com/org';
        this.eventList = new eventlistservice_service_1.EventListService;
        this.volunteerList = new volunteerlistservice_service_1.VolunteerListService;
    }
    ngOnInit() {
        //Request GET from URL
        this.http.get(this.nonProfitUrl)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
        //Create a function to set local variables to
        res => {
            this.name = res.name;
            this.id = res.id;
            this.username = res.username;
            this.missionStatement = res.missionStatement;
            this.otherInfo = res.otherInfo;
            this.splashImageURL = res.splashImageURL;
            this.imageURL = res.imageURL;
            this.eventList.importList(res.condensedEvents);
            this.volunteerList.importList(res.condensedVolunteers);
            console.log(eventlist_component_1.EventList);
        }, 
        //Set function to catch error
        error => console.log(error));
        //Data will be updated after request is finished
    }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleError(error) {
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    }
};
NonProfitService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], NonProfitService);
exports.NonProfitService = NonProfitService;
//# sourceMappingURL=nonprofit.service.js.map