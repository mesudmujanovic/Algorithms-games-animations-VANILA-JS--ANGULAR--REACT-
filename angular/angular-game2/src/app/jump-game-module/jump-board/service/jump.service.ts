import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JumpService {
  private checkSubscription: Subscription | undefined;

  constructor() {}

  startChecking(block: HTMLElement, character: HTMLElement, blockSecond: HTMLElement, deadCallback: () => void): void {
    this.checkSubscription?.unsubscribe();
    this.checkSubscription = interval(100).subscribe(() => {
      const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
      const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
      const blockRandom = parseInt(window.getComputedStyle(blockSecond).getPropertyValue('left'));

      console.log(`Character Top: ${characterTop}, Block Left: ${blockLeft}, Block Random: ${blockRandom}`);

      if (this.isCollision(blockLeft, characterTop, 130, 150) || this.isCollision(blockRandom, characterTop, 0, 60)) {
        deadCallback();
      }
    });
  }

  private isCollision(block: number, character: number, minTop: number, maxTop: number): boolean {
    return block < 20 && block > 0 && character >= minTop && character <= maxTop;
  }

  stopChecking(): void {
    this.checkSubscription?.unsubscribe();
  }
}
