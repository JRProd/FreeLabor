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
const nonprofitprofile_service_1 = require('./nonprofitprofile.service');
let NonProfitPage = class NonProfitPage {
    constructor(profile) {
        this.profile = profile || new nonprofitprofile_service_1.NonProfitProfile();
    }
    addEvent(event) {
        this.events.push(event);
    }
    addVolunteers(volunteer) {
        this.volunteers.push(volunteer);
    }
};
NonProfitPage = __decorate([
    core_1.Component({
        selector: 'nonprofitpage',
        templateUrl: './webpage/nonprofitpage/nonprofit.html',
        styleUrls: ['./webpage/nonprofitpage/nonprofit.css'],
        providers: [nonprofitprofile_service_1.NonProfitProfile]
    }), 
    __metadata('design:paramtypes', [nonprofitprofile_service_1.NonProfitProfile])
], NonProfitPage);
exports.NonProfitPage = NonProfitPage;
//# sourceMappingURL=nonprofit.component.js.map