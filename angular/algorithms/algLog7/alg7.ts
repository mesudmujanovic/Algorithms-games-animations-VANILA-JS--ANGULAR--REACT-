import { Component } from "@angular/core";

@Component({
    selector:`app-alg7`,
    template: ``
})

export  class AppLog7Component{
    
  // Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
  // The returned array should be created such that returnedArray[i] = fn(arr[i], i).
  // Please solve it without the built-in Array.map method.
  // Example 1:
  // Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
  // Output: [2,3,4]
  // Explanation:
  // const newArray = map(arr, plusone); // [2,3,4]
  // The function increases each value in the array by one.

  arr = [1, 2, 3];
  mapsFunc(arr: number[], fn: ( n:number, index:number) => number): number[]{
    const newArray: number[] = []
    for (let i = 0; i < arr.length; i++) {
       newArray.push( fn(arr[i], i) );
     }
    return newArray;
  };

  plusOne(n){
    return n + 1;
  }
  
//////with build-in Array.map

plusOneMap(n){
return n + 1;
}

arrMap(): number[]{
  let finishArr: number[] =[]
   for (let i = 0; i < this.arr.length; i++) {
     finishArr = this.arr.map(this.plusOneMap);
}
return finishArr;
}

ngOnInit(){
  const finish = this.mapsFunc( this.arr, (n, index) => this.plusOne(n))
  console.log(finish);
  
  const finishArrayMap = this.arrMap();
  console.log(finishArrayMap);
}
}