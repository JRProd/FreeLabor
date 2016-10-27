import {Injectable} from '@angular/core';

@Injectable()
export class EventProfile {

    orgName: string;    
    name: string;
    id: number;
    image: string;
    date: string;
    time: string;
    location: string;
    description: string;
    volunteers: any[];


    constructor()
    {
        console.log("New Event");
        this.orgName = "Org Name";
        this.name = "Event Name";
        this.id = 1;
        this.image = "https://placeholdit.imgix.net/~text?txtsize=33&txt=1300%C3%97400&w=1300&h=400";
        this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit elit iaculis gravida ultricies. Aenean eu vulputate enim, nec gravida ligula. Donec aliquet, augue porttitor hendrerit vehicula, ligula libero laoreet orci, tincidunt mattis ante quam id turpis. Duis auctor molestie nisi sed maximus. Morbi posuere euismod sagittis. Quisque iaculis mollis eros, eu semper est rhoncus semper. Integer convallis eu turpis et tempus."
        this.location = "Location"
        this.date = "12/12/2012"
        this.time = "12:22 am"

        this.volunteers = [
            {"img": "http://placehold.it/140x100", "name":"Volunteer Name"},
            {"img": "http://placehold.it/140x100", "name":"Volunteer Name"},
            {"img": "http://placehold.it/140x100", "name":"Volunteer Name"},
            {"img": "http://placehold.it/140x100", "name":"Volunteer Name"},
            {"img": "http://placehold.it/140x100", "name":"Volunteer Name"},
            {"img": "http://placehold.it/140x100", "name":"Volunteer Name"}]
    }
}
