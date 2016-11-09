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
const event_service_1 = require('./event.service');
require('rxjs/add/operator/map');
let Event = class Event {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.getEvent();
    }
    getEvent() {
        this.eventService.getEvent()
            .subscribe(res => this.result = res, error => console.log(error), () => this.defineProfile());
    }
    defineProfile() {
        this.title = this.result.title;
        this.location = this.result.location;
        this.date = this.result.date;
        this.description = this.result.description;
        this.imageUrl = this.result.imageUrl;
        this.orgName = this.result.orgName;
        this.attendees = this.result.attendees;
        this.maxAttendees = this.result.maxAttendees;
    }
    addVolunteer() {
    }
};
Event = __decorate([
    core_1.Component({
        selector: 'event',
        templateUrl: './webpage/eventpage/event.html',
        styleUrls: ['./webpage/eventpage/event.css'],
        providers: [event_service_1.EventService]
    }), 
    __metadata('design:paramtypes', [event_service_1.EventService])
], Event);
exports.Event = Event;
//# sourceMappingURL=event.component.js.map