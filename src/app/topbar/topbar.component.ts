import { Component, OnInit } from '@angular/core';
import { DefaultSingleton } from '../_singleton/default';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  default_singleton:DefaultSingleton;
  constructor() {
    this.default_singleton = DefaultSingleton.getInstance();
  }

  ngOnInit() {
  }

  getSystemName():string|boolean|undefined{

    return this.default_singleton.getDefaults().system_name;
  }
  getSystemColor():string|boolean|undefined{

    return this.default_singleton.getDefaults().system_color;
  }
  getCompanyName():string|boolean|undefined{

    return this.default_singleton.getDefaults().company_user;
  }

}
