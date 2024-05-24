import { Component } from "@angular/core";

@Component({
    selector: `app-alg6`,
    template: ``
})

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.
// Example 1:
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

export class AlgLog6Component {

    //////// EXERCISE
    fil(fn: (n: number, i: number) => number) {
        const numb = [1, 2, 3, 4, 5];
        let result: number = 0;
        for (let i = 0; i < numb.length; i++) {
            const transofmer = fn(numb[i], i)
            result += transofmer;
        }
        return result;
    }

    /////////////////////////\\\\\\\\\\\\\\\\\
    ///// TASK LETCODE
    filter(arr: number[], fn: (n: number, i: number) => boolean): number[] {
        const filteredArr: number[] = []
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i)) {
                filteredArr.push(arr[i]);
            } else {
            }
        }
        return filteredArr;
    }

    ngOnInit() {
        ///// TASK LETCODE
        const arr = [0, 10, 20, 30];
        const filteredArr = this.filter(arr, (fn) => fn > 10);
        console.log(filteredArr);
        ////\\\\\\\\\\\\\\\\\\
         //////// EXERCISE
        const sumFunction = (n: number, i: number) => n + (i + 1);
        const result = this.fil(sumFunction);
        ///////\\\\\\\\\\\\\\\\\\
    }
}

