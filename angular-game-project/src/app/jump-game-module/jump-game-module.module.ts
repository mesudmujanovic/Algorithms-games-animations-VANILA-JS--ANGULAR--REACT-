import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpBoardComponent } from './jump-board/jump-board.component';


@NgModule({
  declarations: [
    JumpBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JumpBoardComponent 
  ]
})
export class JumpGameModuleModule { }
