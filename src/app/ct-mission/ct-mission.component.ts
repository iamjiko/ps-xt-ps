import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../mission';


@Component({
  selector: 'ct-mission',
  templateUrl: './ct-mission.component.html',
  styleUrls: ['./ct-mission.component.scss']
})
export class CtMissionComponent implements OnInit {
  @Input() mission: Mission; 
  constructor() { }

  ngOnInit(): void {
  }

}
