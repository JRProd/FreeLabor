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
let EventListService = class EventListService {
    constructor() {
        this.eventList = new Array();
    }
    importList(list) {
        for (let evt of list) {
            let newEvent = evt;
            let event = {};
            event.orgName = newEvent.orgName || "Default Org";
            event.title = newEvent.title || "New Event";
            event.id = newEvent.id;
            event.imageURL = newEvent.imageURL || "http://placehold.it/100x100";
            console.log(newEvent.imageURL);
            event.description = newEvent.description || "Here is a description";
            event.location = newEvent.location || "Undetermined";
            event.date = newEvent.date || "Undetermined";
            event.time = newEvent.time || "TBA";
            event.attendees = newEvent.attendees || 0;
            event.maxAttendees = newEvent.maxAttendees || 9999;
            this.eventList.push(event);
        }
    }
};
EventListService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], EventListService);
exports.EventListService = EventListService;
//# sourceMappingURL=eventlistservice.service.js.map