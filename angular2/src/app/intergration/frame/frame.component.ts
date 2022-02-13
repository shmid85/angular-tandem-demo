import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FrameStateService } from '../services/frame-state.service';
import { PostEventsService } from "../services/post-events.service";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent{
  canShowFrame?: boolean;
  url?: SafeResourceUrl;
  frame?: HTMLIFrameElement;
  @ViewChild('frame') hostedAppIFrame!: ElementRef;

  constructor(
      private readonly domSanitizer: DomSanitizer,
      private readonly frameStateService: FrameStateService,
      private readonly postEventsService: PostEventsService,
  ) {
    /**
     * We subscribe for changing a state of the frame
     */
    this.frameStateService.iframeState.subscribe(data => {
      this.canShowFrame = data.canShowFrame;
      this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.getFullPath(data.url)
      );
    });
  }

  /**
   * To set right url in the frame we need to know a sub path of the angularjs app.
   * Substring http://localhost:8000'}/# should be a part of some config and be configurable to
   * make appropriate changes according to environment the app is run.
   */
  private getFullPath(path: string): string {
    return `${'http://localhost:8000'}/#${path}`;
  }
}
