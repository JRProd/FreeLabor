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
const volunteerlistservice_service_1 = require('../volunteerlist/volunteerlistservice.service');
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
const Rx_1 = require('rxjs/Rx');
let EventService = class EventService {
    constructor(http) {
        this.http = http;
        this.eventUrl = 'https://private-73213-artisanapi.apiary-mock.com/event';
        this.volunteerList = new volunteerlistservice_service_1.VolunteerListService;
    }
    ngOnInit() {
        //Request GET from URL
        this.http.get(this.eventUrl)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(
        //Create a function to set local variables to
        res => {
            this.title = res.title;
            this.id = res.id;
            this.date = res.dateStart + ' - ' + res.dateEnd;
            this.location = res.address + ' ' + res.city + ', ' + res.state + ' ' + res.zip;
            this.description = res.description;
            this.imageURL = res.imageURL;
            this.maxAttendees = res.maxAttendees;
            this.orgName = res.orgName;
            this.volunteerList.importList(res.condensedVolunteers);
            console.log(this.title);
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
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Rx_1.Observable.throw(errMsg);
    }
};
EventService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
], EventService);
exports.EventService = EventService;
var _a;
//# sourceMappingURL=event.service.js.map