import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FrameStateService } from "../services/frame-state.service";

@Component({
  template: '<router-outlet></router-outlet>',
})
export class AppSwitcherComponent{
  constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly frameStateService: FrameStateService,
  ) {
    /**
     * We subscribe to router events to change a state of the frame
     */
    this.route.data.subscribe((data) => {
      if(data.canShowFrame) {
        return this.frameStateService.show(this.router.url);
      }

      this.frameStateService.hide(this.router.url);
    });
  }
}
