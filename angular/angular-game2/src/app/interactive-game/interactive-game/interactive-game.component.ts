import { Component, OnInit } from '@angular/core';
import { RandomColors } from './random-colors';

@Component({
  selector: 'app-interactive-game',
  templateUrl: './interactive-game.component.html',
  styleUrls: ['./interactive-game.component.scss']
})
export class InteractiveGameComponent implements OnInit {
  dots: number[] = Array.from(Array(160).keys());
  colorPicker: RandomColors = new RandomColors();

  changeStyle(dot: any){
    const randomColorIndex = this.colorPicker.randomColorsIndex();
    dot.classList.add(randomColorIndex);    
  }

  ngOnInit() {
  }
}
