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
let VolunteerService = class VolunteerService {
    constructor() {
        this.volunteer = { id: 1, name: 'J', orgsFollowing: 'orgs', eventsAttending: 'events', bio: 'bio', stats: 'stats' };
    }
    getVolunteer(id) {
        return this.volunteer;
    }
    getOrgsFollowing(volunteerId) {
        //get the orgs here
    }
    getEventsAttending(volunteerId) {
        //get events here
    }
};
VolunteerService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], VolunteerService);
exports.VolunteerService = VolunteerService;
//# sourceMappingURL=volunteer.service.js.map