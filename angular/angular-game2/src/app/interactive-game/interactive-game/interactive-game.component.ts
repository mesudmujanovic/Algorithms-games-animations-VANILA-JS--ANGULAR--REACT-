import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive-game',
  templateUrl: './interactive-game.component.html',
  styleUrls: ['./interactive-game.component.scss']
})
export class InteractiveGameComponent {


    dots = Array.from(Array(160).keys());
    
}
