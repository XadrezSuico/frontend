import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { DefaultSingleton } from "../_singleton/default";

@Injectable({
  providedIn: 'root'
})
export class XadrezSuicoTitleService{
  default_singleton:DefaultSingleton;
  constructor(private title_service:Title) {
    this.default_singleton = DefaultSingleton.getInstance();
  }

  setTitle(value:any = null){
    let system_title = "";
    if(this.default_singleton.getDefaults()){
      if(this.default_singleton.getDefaults().company_user){
        system_title = `${this.default_singleton.getDefaults().system_name} de ${this.default_singleton.getDefaults().company_user}`;
      }else{
        system_title = "RokadeManager"
      }
    }else{
      system_title = "RokadeManager"
    }

    if(value){
      this.title_service.setTitle(String(value).concat(` - ${system_title}`));
    }else{
      this.title_service.setTitle(`${system_title}`);
    }
  }

}
