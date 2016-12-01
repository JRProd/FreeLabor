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
const volunteer_service_1 = require('../volunteerpage/volunteer.service');
const volunteerlistservice_service_1 = require('./volunteerlistservice.service');
let VolunteerList = class VolunteerList {
    constructor() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', volunteerlistservice_service_1.VolunteerListService)
], VolunteerList.prototype, "volunteerListService", void 0);
VolunteerList = __decorate([
    core_1.Component({
        selector: 'volunteer-list',
        templateUrl: './webpage/volunteerlist/volunteerlist.html',
        styleUrls: ['./webpage/volunteerlist/volunteerlist.html'],
        providers: [volunteer_service_1.VolunteerService, volunteerlistservice_service_1.VolunteerListService]
    }), 
    __metadata('design:paramtypes', [])
], VolunteerList);
exports.VolunteerList = VolunteerList;
//# sourceMappingURL=volunteerlist.component.js.map