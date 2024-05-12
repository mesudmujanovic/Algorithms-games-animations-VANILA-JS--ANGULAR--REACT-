import { Component,ElementRef, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-jump-board',
  templateUrl: './jump-board.component.html',
  styleUrls: ['./jump-board.component.scss']
})
export class JumpBoardComponent {
  character!: HTMLElement;
  block!: HTMLElement;
  jumpCount: number = 0;
  checkSubscription: Subscription | undefined;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.character = this.elementRef.nativeElement.querySelector('#character');
    this.block = this.elementRef.nativeElement.querySelector('#block');
  }

  jump(): void {
    const className = 'animate-jump';
    if (!this.character.classList.contains(className)) {
      this.renderer.addClass(this.character, className);
      this.jumpCount++;
    }

    this.timeout(this.character, className);
    this.checkDead();
  }

  timeout(domElement: HTMLElement, className: string): void {
    setTimeout(() => {
      this.renderer.removeClass(domElement, className);
    }, 500);
  }

  checkDead(): void {
    this.checkSubscription?.unsubscribe();
    this.checkSubscription = interval(10).subscribe(() => {
      const characterTop = parseInt(window.getComputedStyle(this.character).getPropertyValue('top'));
      const blockLeft = parseInt(window.getComputedStyle(this.block).getPropertyValue('left'));

      if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        this.dead();
      }
    });
  }

  dead(): void {
    this.jumpCount = 0;
    this.block.style.animation = 'none';
    this.block.style.display = 'none';
    alert('You lose');
    this.resetGame();
  }
  
  resetGame(): void {
    this.block.style.left = '480px';
    this.block.style.animation = '';
    this.block.style.display = 'block';
    this.jumpCount = 0;
  }

  ngOnDestroy(): void {
    this.checkSubscription?.unsubscribe(); 
  }
}
