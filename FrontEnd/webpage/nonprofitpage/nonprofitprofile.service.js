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
let NonProfitProfile = class NonProfitProfile {
    constructor() {
        console.log("New default NonProfitProfile");
        this.orgName = "Default Org";
        this.id = 1;
        this.userPictureSrc = ".http://placehold.it/250";
        this.splashPictureSrc = "http://placehold.it/350x65";
        this.missionStatement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi est, condimentum sed sapien in, dapibus commodo ex. Nullam a massa blandit nibh consequat convallis.";
        this.otherInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh a quam hendrerit fermentum a vel leo. Suspendisse porttitor aliquam ultricies. Sed eget lobortis felis. "
            + "Vivamus auctor leo nibh, sed condimentum purus feugiat ac. Nulla ut lectus hendrerit, aliquet dui sit amet, porttitor augue. Curabitur ut est nibh. Etiam sit amet posuere felis. "
            + "Mauris congue felis non nulla pharetra iaculis. Duis rhoncus, felis vel facilisis elementum, eros felis commodo nulla, quis auctor nulla justo vel augue. Proin tempus luctus lectus non tempus. "
            + "Aenean gravida sodales pharetra. Aliquam in justo feugiat, lobortis lorem sed, ultricies sapien. Integer at justo et ipsum tempor ultricies vitae quis felis. "
            + "Ut egestas, lorem sodales finibus auctor, ligula felis lobortis enim, et varius lorem arcu sit amet ligula. Nunc pellentesque urna non dapibus placerat. "
            + "Vestibulum fringilla, leo non fringilla volutpat, velit turpis dapibus quam, nec luctus massa massa sed mauris. Praesent laoreet nisl et cursus aliquet. Integer porta gravida eros, ut interdum leo tincidunt in. "
            + "Donec sit amet libero enim. Aliquam vulputate fringilla ante, eget sodales turpis rutrum id. Morbi et tortor id risus suscipit pretium a vitae dolor. Nulla ultricies dictum neque sed condimentum. "
            + "Donec tempus tempor mi tempor malesuada.";
    }
};
NonProfitProfile = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], NonProfitProfile);
exports.NonProfitProfile = NonProfitProfile;
//# sourceMappingURL=nonprofitprofile.service.js.map