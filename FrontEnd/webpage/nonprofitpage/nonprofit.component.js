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
const nonprofit_service_1 = require('./nonprofit.service');
require('rxjs/add/operator/map');
let NonProfit = class NonProfit {
    constructor(nonProfitService) {
        this.nonProfitService = nonProfitService;
    }
    ngOnInit() {
        this.getNonProfit();
    }
    getNonProfit() {
        this.nonProfitService.getNonProfit()
            .subscribe(res => this.result = res, error => console.log(error), () => this.defineProfile());
    }
    defineProfile() {
        this.name = this.result.name;
        this.username = this.result.username;
        this.missionStatement = this.result.missionStatement;
        this.otherInfo = this.result.otherInfo;
        this.imageUrl = this.result.imageUrl;
        this.condensedEvents = this.result.condensedEvents;
        this.condensedVolunteers = this.result.condensedVolunteers;
    }
    addEvent() {
    }
    addVolunteer() {
    }
};
NonProfit = __decorate([
    core_1.Component({
        selector: 'non-profit',
        templateUrl: './webpage/nonprofitpage/nonprofit.html',
        styleUrls: ['./webpage/nonprofitpage/nonprofit.css'],
        providers: [nonprofit_service_1.NonProfitService]
    }), 
    __metadata('design:paramtypes', [nonprofit_service_1.NonProfitService])
], NonProfit);
exports.NonProfit = NonProfit;
//# sourceMappingURL=nonprofit.component.js.map