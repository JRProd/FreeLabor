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
const nonprofitlistservice_service_1 = require('./nonprofitlistservice.service');
const nonprofit_service_1 = require('../nonprofitpage/nonprofit.service');
let NonProfitList = class NonProfitList {
    constructor() {
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', nonprofitlistservice_service_1.NonProfitListService)
], NonProfitList.prototype, "nonProfitListService", void 0);
NonProfitList = __decorate([
    core_1.Component({
        selector: 'nonprofit-list',
        templateUrl: './webpage/nonprofitlist/nonprofitlist.html',
        styleUrls: ['./webpage/nonprofitlist/nonprofitlist.css'],
        providers: [nonprofit_service_1.NonProfitService, nonprofitlistservice_service_1.NonProfitListService]
    }), 
    __metadata('design:paramtypes', [])
], NonProfitList);
exports.NonProfitList = NonProfitList;
//# sourceMappingURL=nonprofitlist.component.js.map