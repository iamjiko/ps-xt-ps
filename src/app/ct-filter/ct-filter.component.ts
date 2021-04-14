import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpacexdataService } from '../spacexdata.service';
import { Mission } from '../mission';
import { BlockingProxy } from 'blocking-proxy';

@Component({
  selector: 'ct-filters',
  templateUrl: './ct-filter.component.html',
  styleUrls: ['./ct-filter.component.scss']
})
export class CtFilterComponent implements OnInit {

  @Output() missionsChanged: EventEmitter<Mission[]> = new EventEmitter()
  launching: string;
  landing: string;
  activeYear: string;


  constructor( private spacexdataService: SpacexdataService) {
  }

  activeYears: Array<Number> = [];
  //missions:Mission[] = [];
  error;

  ngOnInit(): void {
    this.activeYears = this.spacexdataService.getAllYears();
    this.getData();
  }

  getYearlyMissions(year) {
    this.activeYear = year;
    this.getData();
  }
  getData () {
    this.spacexdataService
    .getAllMissionsByYear(this.activeYear, this.launching, this.landing)
    .subscribe(
      missions => ( this.missionsChanged.emit(missions) ),
      error => (this.error = error)
    )
  }

  getMissions(type: string, flag: boolean, event: Event) {
    if(type === 'lan') {
      this.landing = flag ? 'y' : 'n';
    }
    if(type === 'lau') {
      this.launching = flag ?  'y' : 'n';
    }
    this.getData();
  }

}
