import { Component,ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { interval, Subject, Subscription, takeUntil, timeout, timer } from 'rxjs';
import { JumpService } from './service/jump.service';

@Component({
  selector: 'app-jump-board',
  templateUrl: './jump-board.component.html',
  styleUrls: ['./jump-board.component.scss']
})
export class JumpBoardComponent implements OnDestroy {
  character!: HTMLElement;
  block!: HTMLElement;
  blockSecond!: HTMLElement;
  jumpCount: number = 0;
  checkSubscription: Subscription | undefined;
  sourceTimer = interval(2000);
  subscription: Subscription | undefined;
  runTimerAgain: boolean = false;

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef,
              private jumpService: JumpService) {}

              
  ngOnInit(): void {
    this.character = this.elementRef.nativeElement.querySelector('#character');
    this.block = this.elementRef.nativeElement.querySelector('#block');
    this.blockSecond = this.elementRef.nativeElement.querySelector('#block-second');
    this.startTimer();
    this.jumpService.startChecking(this.character, this.block, this.blockSecond, this.dead.bind(this));
  }


  startTimer() {
    this.subscription = this.sourceTimer.subscribe(() => {
      const blocksecond = 'blocksecond';
      this.renderer.addClass(this.blockSecond, blocksecond);
      console.log("Animation started")
      this.ngOnDestroy();
      this.startSecondTimer();
    });
  }

  startSecondTimer() {
    timer(4000).subscribe(() => {
      console.log("Second timer executed after 2 seconds");
      const blocksecond = 'blocksecond';
      this.renderer.removeClass(this.blockSecond, blocksecond);  
      this.startTimer();
      });
  }

  ngOnDestroy(): void {
    this.jumpService.stopChecking();
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
  

  jump(): void {
    const className = 'animate-jump';
    if (!this.character.classList.contains(className)) {
      this.renderer.addClass(this.character, className);
      this.jumpCount++;
    }

    this.timeout(this.character, className);
  }

  timeout(domElement: HTMLElement, className: string): void {
    setTimeout(() => {
      this.renderer.removeClass(domElement, className);
    }, 500);
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

}
