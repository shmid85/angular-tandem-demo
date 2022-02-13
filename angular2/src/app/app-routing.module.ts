import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from "./components/map/map.component";
import { HelpComponent } from "./components/help/help.component";
import { AppSwitcherComponent } from './intergration/app-switcher/app-switcher.component';

/**
 * A master app is angular2 so it means that a matcher of angular2+ router
 * take decision showing\hiding the frame.
 * If angular2 app has a route it shows it
 * if no it shows the frame and sets to url.
 *
 * But when the frame is shown and we serf in the frame
 * it means changing routes only in the angularjs app
 * and angular2 wont react on it.
 * In another works when in the frame we change route to
 * migrated one in the anguler2 app it ong hide frame.
 * To fix that we need to cause re-routing from angularjs app in angular2 app by postMessages.
 * (see integration folder)
 *
 * The routes model in both apps should be the same.
 * It allows to save familiar links for users.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppSwitcherComponent,
    data: { canShowFrame: false },
    children: [
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
    ]
  },
  {
    path: '**',
    component: AppSwitcherComponent,
    data: { canShowFrame: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
