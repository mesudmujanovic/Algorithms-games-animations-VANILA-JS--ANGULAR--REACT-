import { Component, OnInit, Renderer2 } from '@angular/core';
import { RandomColors } from './random-colors';
import { count, interval, map, Observable, Subscription, takeWhile, timer } from 'rxjs';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-interactive-game',
  templateUrl: './interactive-game.component.html',
  styleUrls: ['./interactive-game.component.scss']
})
export class InteractiveGameComponent implements OnInit {
  dots: number[] = Array.from(Array(112).keys());
  colorPicker: RandomColors = new RandomColors();
  counter$: Observable<number> | undefined;
  private readonly initialCounter = 25;
  paintedDotsCount: number = 0;
  isGameStarted: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  changeStyle(event: MouseEvent) {
    const dot = event.target as HTMLElement;
    if (dot.style.backgroundColor !== '') {
      return;
    }
    const randomColorIndex = this.colorPicker.randomColorsIndex();
    this.renderer.setStyle(dot, 'background-color', randomColorIndex);
    this.paintedDotsCount++;  
    this.checkGameStatus();
  }

  checkGameStatus() {
    if (this.paintedDotsCount === this.dots.length) {
      console.log('Kviz je završen!');
    }
  }
  
   fCounter() {
    this.counter$ = interval(1000).pipe(
      map(count => this.initialCounter - count),
      takeWhile(count => count >= 0)
    )
   }

   startGame() {
    this.fCounter();
    this.isGameStarted = true;
    }

  ngOnInit() {
  }
}
