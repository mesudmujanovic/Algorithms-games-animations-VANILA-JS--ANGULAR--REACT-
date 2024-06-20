import { Component, ElementRef, OnDestroy, Renderer2, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { JumpService } from './service/jump.service';

@Component({
  selector: 'app-jump-board',
  templateUrl: './jump-board.component.html',
  styleUrls: ['./jump-board.component.scss']
})
export class JumpBoardComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('character', { static: true }) character!: ElementRef;
  @ViewChild('block', { static: true }) block!: ElementRef;
  @ViewChild('blockSecond', { static: true }) blockSecond!: ElementRef;

  jumpCount: number = 0;
  checkSubscription: Subscription | undefined;
  sourceTimer = interval(2000);
  subscription: Subscription | undefined;

  constructor(private renderer: Renderer2,
              private jumpService: JumpService) {}

  ngOnInit(): void {
    this.startTimer();
  }

  ngAfterViewInit(): void {
    this.jumpService.startChecking(
      this.block.nativeElement, 
      this.character.nativeElement, 
      this.blockSecond.nativeElement,       
      this.dead.bind(this)
    );
  }

  ngOnDestroy(): void {
    this.jumpService.stopChecking();
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

  startTimer() {
    this.subscription = this.sourceTimer.subscribe(() => {
      const blocksecond = 'blocksecond';
      this.renderer.addClass(this.blockSecond.nativeElement, blocksecond);
      this.startSecondTimer();
    });
  }

  startSecondTimer() {
    setTimeout(() => {
      const blocksecond = 'blocksecond';
      this.renderer.removeClass(this.blockSecond.nativeElement, blocksecond);  
      this.startTimer();
    }, 4000);
  }

  jump(): void {
    const className = 'animate-jump';
    if (!this.character.nativeElement.classList.contains(className)) {
      this.renderer.addClass(this.character.nativeElement, className);
      this.jumpCount++;
    }
    this.timeout(this.character.nativeElement, className);
    this.startSecondTimer();
  }

  timeout(domElement: HTMLElement, className: string): void {
    setTimeout(() => {
      this.renderer.removeClass(domElement, className);
    }, 500);
  }

  dead(): void {
    this.jumpCount = 0;
    this.block.nativeElement.style.animation = 'none';
    this.block.nativeElement.style.display = 'none';
    alert('You lose');
    this.resetGame();
  }

  resetGame(): void {
    this.block.nativeElement.style.left = '480px';
    this.block.nativeElement.style.animation = '';
    this.block.nativeElement.style.display = 'block';
    this.jumpCount = 0;
  }
}
