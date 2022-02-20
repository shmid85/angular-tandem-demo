import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { PostEventData } from "../types/post-event";
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PostEventsService {


  constructor(private readonly router: Router) {
      window.addEventListener('message', (event: MessageEvent) => {
          if (event.origin !== window.location.origin) {
              return;
          }

          this.handleEvent(event.data);
      });
  }

  private handleEvent(data: PostEventData) {
      if (
          data.type === 'routing' &&
          data.path !== this.router.url
      ) {
          const path = Location.stripTrailingSlash(data.path);

          this.router.navigateByUrl(path);
      }
  }
}

