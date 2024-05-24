import { Component } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-algoritams-logic',
  templateUrl: './algorithms-logic.component.html',
})
export class AlgoritamsLogichComponent {

  niz: Observable<number[]> = of([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

  vezba(){
   const newNumer: number =  7;
    this.niz.pipe(
      switchMap( num =>{
        const newArr = [...num, newNumer];
        return of(newArr);
      }),
      switchMap(num => {
        const index = num.indexOf(newNumer)
        return of(index)
      })
    ).subscribe()
  }
  ngOnInit(){
    this.vezba();
  }
}
