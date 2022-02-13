import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { FrameState } from "../types/frame.state";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FrameStateService {
  frameWindow = new BehaviorSubject<Window | null>(null);

  readonly iframeState = new BehaviorSubject<FrameState>({
    canShowFrame: false,
    url: this.router.url,
  });

  constructor(private readonly router: Router) {}

  show(url: string): void {
    this.iframeState.next({
      canShowFrame: true,
      url,
    })
  }

  hide(url: string): void {
    this.iframeState.next({
      canShowFrame: false,
      url,
    })
  }
}

