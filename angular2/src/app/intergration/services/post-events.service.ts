import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { PostEventData } from "../types/post-event";

@Injectable({
  providedIn: 'root'
})
export class PostEventsService {


  constructor(private readonly router: Router) {
      window.addEventListener('message', (event: MessageEvent) => {
          console.log('Event', event);

          // if (event.origin !== window.location.origin) {
          //     return;
          // }

          this.handleEvent(event.data);
      });

    // this.$frameWindow.subscribe(frameWindow => {
    //       // console.log('PostEventsService frameWindow', frameWindow);
    //       frameWindow?.addEventListener('message', this.listener);
    //   }
    // )
    //   window.addEventListener('message', () => console.log('post angular2+'));

  }

  private handleEvent(data: PostEventData) {
      if (data.path !== this.router.url) {
          // const path = Location.stripTrailingSlash(eventData.path);

          console.log('path', data.path);
          // this.router.navigateByUrl(path);
      }
  }

  // private listener(event: MessageEvent): void {
  //    if (event.origin !== window.location.origin) {
  //     return;
  //   }
  //
  //   console.log('aaa', event);
    //
    // this.router.navigateByUrl('');
  // }
}

