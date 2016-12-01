import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

    members : any[];

    constructor(){
        this.members = [
            {
                name: "Denver Brittain",
                imgURL: "/webpage/images/denver.jpg",
                bio: "Denver's Bio"
            },
            {
                name: "AJ DeTorrice",
                imgURL: "/webpage/images/aj.png",
                bio: "Aj's Bio"
            },
            {
                name: "Etta Godwin",
                imgURL: "/webpage/images/etta.jpg",
                bio: "95% of the time I hate computers."
            },
            {
                name: "Luke Hansen",
                imgURL: "/webpage/images/luke.jpg",
                bio: "Luke's Bio"
            },
            {
                name: "Jake Rowland",
                imgURL: "/webpage/images/jake.jpg",
                bio: "Jake's Bio"
            }
        ]
    }

    getMembers(): any[]{
        return this.members;
    }
}