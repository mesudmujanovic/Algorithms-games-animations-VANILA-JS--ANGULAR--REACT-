import { Component } from "@angular/core";

@Component({
    selector: `app-alg9`,
    template: ``
})

export class AppLog9Component{
    
    arr:number[] = [1,2,3,4]

    reducers( arr:number[], fn:(n: number, init: number) => number ){
        let nums:number = 0;
        for (let i = 0; i < arr.length; i++) {
              nums = fn(arr[i], nums);              
        }
    }

    //////exercies
    p: number[] = [1,2,2]
    sumaNiza(niz: number[]): number{
        return niz.reduce((a, b) => a + b, 0);
    }
    
    ngOnInit(){
  ////exercies
        const result = this.sumaNiza(this.p)
        console.log(result);        

    const reducerFn = (num:number, acc: number) => {
          return  num + acc
        };
       this.reducers(this.arr, reducerFn);
    
    }
}

