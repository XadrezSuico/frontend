import { XadrezSuicoTitleService } from './../../../_services/title.service';
import { EventPublic } from './../../_interfaces/event-public';
import { RegisterEventController } from './../../_controllers/register-event.controller';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faStopwatch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { DefaultSingleton } from 'src/app/_singleton/default';
import { DefaultController } from 'src/app/_controllers/default.controller';

@Component({
  selector: 'app-register-page-event',
  templateUrl: './register-page-event.component.html',
  styleUrls: ['./register-page-event.component.scss']
})
export class RegisterPageEventComponent implements OnInit, AfterViewInit {

  faCalendar = faCalendar;
  faMapPin = faMapMarkerAlt;
  faClock = faStopwatch;
  faSpin = faSyncAlt;

  is_requesting = true;
  default_singleton:DefaultSingleton;

  constructor(private register_event_controller:RegisterEventController, private route: ActivatedRoute, private title_service:XadrezSuicoTitleService) {
    this.default_singleton = DefaultSingleton.getInstance();
  }

  uuid:string = "";

  @Input()
  event!: EventPublic;

  page_active = 'home'

  ngOnInit() {
    this.uuid = String(this.route.snapshot.paramMap.get('uuid'));
  }
  ngAfterViewInit(): void {
    if(this.event){
      this.title_service.setTitle(this.event.info.title);
    }
  }
  getSystemClass(){
    return this.default_singleton.getDefaults().system_class;
  }

  changePageByEvent(slug:string){
    this.page_active = slug;
  }

}
