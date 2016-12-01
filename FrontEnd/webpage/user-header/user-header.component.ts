import { Component } from '@angular/core';

import { UserHeader } from './user-header.service';

@Component({
  selector: 'user-header',
  templateUrl: './webpage/user-header/user-header.html',
  styleUrls: [ './webpage/user-header/user-header.css' ],
  providers: [ UserHeader ]
})
export class UserHeaderComponet
{
    constructor(private userHeader: UserHeader)
    {

    }
}