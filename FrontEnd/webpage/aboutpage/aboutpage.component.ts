import { Component } from '@angular/core';
import { AboutService } from './aboutpage.service';

@Component({
    selector: 'about-page',
    templateUrl: './webpage/aboutpage/aboutpage.html',
    styleUrls: ['./webpage/aboutpage/aboutpage.css'],
    providers: [ AboutService ]
})

export class About {
    members : any[];
    constructor(private aboutService : AboutService) {
        this.members = aboutService.getMembers();
     }
}