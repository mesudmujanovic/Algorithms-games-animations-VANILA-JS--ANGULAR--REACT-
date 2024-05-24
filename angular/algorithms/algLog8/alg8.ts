import { Component } from "@angular/core";

@Component({
    selector: `app-alg8`,
    template: ``
})

export class AppLog8Component {

    counter: number = 5;

    createCounter(init: number) {
        let currValue = init;

        return {
            increment: () => {
                currValue++
                return currValue;
            },
            decrement: () => {
                currValue--;
                return currValue
            },
            reset: () => { 
                currValue = init
                return currValue;
            },
        }
    };

ngOnInit(): void{

    const myCounter  = this.createCounter(this.counter);
    const increment = myCounter.increment()
    const reset = myCounter.reset()
    const decrement = myCounter.decrement();
    console.log(increment);
    console.log(reset);
    console.log(decrement);
   
}    

}