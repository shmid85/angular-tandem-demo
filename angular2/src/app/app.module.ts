import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './intergration/frame/frame.component';
import { MapComponent } from "./components/map/map.component";
import { HelpComponent } from "./components/help/help.component";
import { AppSwitcherComponent } from './intergration/app-switcher/app-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    HelpComponent,
    MapComponent,
    AppSwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
