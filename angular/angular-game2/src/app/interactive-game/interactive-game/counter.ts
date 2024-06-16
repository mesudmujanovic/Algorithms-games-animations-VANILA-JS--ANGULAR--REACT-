import {map, Observable, takeWhile, tap } from "rxjs";

export class Counter {
    private readonly initalCounter: number = 25;

    startCounter(counter: Observable<number>): Observable<number> {
      return counter.pipe(
            map(count => this.initalCounter - count),
            takeWhile(count => count >= 0),
            tap(count => {
                if (count === 0) {
                    alert("Time's up! You lose.");
                }
            })
        );
    }
}