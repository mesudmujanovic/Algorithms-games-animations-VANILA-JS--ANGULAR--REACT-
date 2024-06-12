import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumpBoardComponent } from './jump-board/jump-board.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    JumpBoardComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    JumpBoardComponent 
  ]
})
export class JumpGameModuleModule { }
