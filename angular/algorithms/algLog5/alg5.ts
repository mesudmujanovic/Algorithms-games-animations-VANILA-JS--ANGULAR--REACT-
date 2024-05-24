import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
    selector: 'app-alg5',
    template: ``
})

export class AlgLog5Component {
// Given an integer n, return a counter function.
//  This counter function initially returns n and then returns 1 more 
//  than the previous value every subsequent time it is called(n, n + 1, n + 2, etc). 

// var createCounter = function(n) {
    
//     return function() {
        
//     };
// };
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

counter: number = 0;

createCounter(n: number){
    
    return()=>{
    return n + this.counter++;    
    }
}

ngOnInit(){

const count = this.createCounter(10);
console.log(count());
console.log(count());
console.log(count());
}

  }