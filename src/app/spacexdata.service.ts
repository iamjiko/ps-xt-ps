import { Injectable } from '@angular/core';
import { Mission } from './mission'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpacexdataService {

  constructor(private http: HttpClient) { }
  baseUrl:string = "https://api.spaceXdata.com/v3/launches";
  
  
  
  getSuccessMissions() {
    let successMissionsUrl:string = this.baseUrl + "?limit=100&launch_success=true";
  }

  getLaunchLandMissions() {
    let launchLandUrl:string = this.baseUrl + "?limit=100&launch_success=true&land_success=true";
  }

  getAllMissionsByYear(year, launch, land) {
    let url = this.baseUrl + '?limit=100';
    if(launch === 'y') {
      launch = true;
      url = url + '&launch_success=true';
    } else if(launch === 'n') {
      url = url + '&launch_success=false';
    }

    if(land === 'y') {
      url = url + '&land_success=true';
    } else if(land === 'n') {
      url = url + '&land_success=false';
    }
    if(year) {
      url = url + '&launch_year=' +year;
    }
    console.log(url);
    return this.http
      .get<Mission[]>(url)
      .pipe(map(this.mapMeIfyouCan), catchError(this.handleError));
  }

  getAllYears() {
    let start = 2006;
    let end = new Date().getFullYear();
    let allYears = [];
    for (let i = start; i<=end; i++ ) {
      allYears.push(i);
    }
    return allYears;
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

  private mapMeIfyouCan(data) {
    data = data.map((item:any) => {
      return new Mission(item.mission_name, item.launch_date_utc, item.links.mission_patch_small, item.launch_success,
        item.launch_year, item.mission_id.join(', '),item.launch_landing);
    });
    return data;
  }
}
