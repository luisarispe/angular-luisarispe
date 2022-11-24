import { Component, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'luisarispe';
  currentApplicationVersion = environment.appVersion;
  constructor(){
    console.log(this.currentApplicationVersion);
  }

}
