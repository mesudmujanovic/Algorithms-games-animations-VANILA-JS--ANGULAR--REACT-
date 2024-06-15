import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { RandomColors } from './random-colors';
import { interval, map, Observable, of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-interactive-game',
  templateUrl: './interactive-game.component.html',
  styleUrls: ['./interactive-game.component.scss']
})
export class InteractiveGameComponent {

  @ViewChildren('dot') dotElements!: QueryList<ElementRef>;

  dots: Observable<number[]> = of(Array.from(Array(96).keys()));
  colorPicker: RandomColors = new RandomColors();
  counter$: Observable<number> | undefined;
  private readonly initialCounter = 25;
  isGameStarted: boolean = false;

  constructor(private renderer: Renderer2) {
  }

  changeStyle(event: MouseEvent) {
    const dot = event.target as HTMLElement;
    const randomColorIndex = this.colorPicker.randomColorsIndex();
    this.renderer.addClass(dot, randomColorIndex);
    this.checkGameStatus();
  }

  checkGameStatus() {
    let paintedDotsCount: number = 0;
    this.dotElements.forEach(dotElement => {
      if (dotElement.nativeElement.classList.length > 1) {
        paintedDotsCount++;
        console.log(paintedDotsCount);
      }
    });

    if (paintedDotsCount == 96) {
      this.isGameStarted = false;
      console.log('Kviz je završen!');
    }
  }

  fCounter() {
    this.counter$ = interval(1000).pipe(
      map(count => this.initialCounter - count),
      takeWhile(count => count >= 0)
    );
  }
  startGame() {
    if (!this.isGameStarted) {
      this.fCounter();
      this.isGameStarted = true;
    }
  }
}
