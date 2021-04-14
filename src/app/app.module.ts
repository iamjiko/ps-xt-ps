import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtFilterComponent } from './ct-filter/ct-filter.component';
import { CtMissionsComponent } from './ct-missions/ct-missions.component';
import { CtMissionComponent } from './ct-mission/ct-mission.component';
import { SpacexdataService } from './spacexdata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CtFilterComponent,
    CtMissionsComponent,
    CtMissionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [SpacexdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
