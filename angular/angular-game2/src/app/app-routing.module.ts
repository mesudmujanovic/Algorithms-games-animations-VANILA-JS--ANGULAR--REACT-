import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumpBoardComponent } from './jump-game-module/jump-board/jump-board.component';
import { InteractiveGameComponent } from './interactive-game/interactive-game/interactive-game.component';

const routes: Routes = [
  { path: 'jump', component: JumpBoardComponent },
  { path: 'interactive', component: InteractiveGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
