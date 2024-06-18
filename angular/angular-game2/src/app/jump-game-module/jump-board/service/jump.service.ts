import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JumpService {
  private checkSubscription: Subscription | undefined;

  constructor() {}

  startChecking(character: HTMLElement, block: HTMLElement, blockSecond: HTMLElement, deadCallback: () => void): void {
    this.checkSubscription?.unsubscribe();
    this.checkSubscription = interval(10).subscribe(() => {
      const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
      const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
      const blockRandom = parseInt(window.getComputedStyle(blockSecond).getPropertyValue('left'));

      if (this.isCollision(blockLeft, characterTop, 130, 150) || this.isCollision(blockRandom, characterTop, 0, 60)) {
        deadCallback();
      }
    });
  }

  private isCollision(blockPosition: number, characterTop: number, minTop: number, maxTop: number): boolean {
    return blockPosition < 20 && blockPosition > 0 && characterTop >= minTop && characterTop <= maxTop;
  }

  stopChecking(): void {
    this.checkSubscription?.unsubscribe();
  }
}
