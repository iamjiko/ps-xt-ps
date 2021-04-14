import { Component, OnInit, Input } from '@angular/core';
import { SpacexdataService } from '../spacexdata.service';
import { Mission } from '../mission';

@Component({
  selector: 'ct-missions',
  templateUrl: './ct-missions.component.html',
  styleUrls: ['./ct-missions.component.scss']
})
export class CtMissionsComponent implements OnInit {
  @Input() missions: Mission[]; 

  constructor( private spacexdataService: SpacexdataService) {
    
  }

  ngOnInit(): void {
  }

}
