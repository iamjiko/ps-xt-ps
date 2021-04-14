import { Component } from '@angular/core';
// import { SpacexdataService } from './spacexdata.service';
import { Mission } from './mission';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ct-app';
  missions:Mission[] = [];
  constructor() {

  }

  missionsChangedHandler(missions) {
    this.missions = missions;
  }
}
