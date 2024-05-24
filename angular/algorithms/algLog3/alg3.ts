import { Component } from "@angular/core";
import { Observable, map, of } from "rxjs";

@Component({
    selector: 'app-alg3',
    template: ``
})

export class Alg3Component {
    // Given an array nums. We define a running sumd of an array as runningSum[i] = SubmitEvent(nums[0]...nums[i]).
    // Example:
    // Input: nums = [3,1,2,10,1]
    // Output: [3,4,6,16,17]

    nums: number[] = [3, 1, 2, 10, 1];
    numbers = of(this.nums);

    defineNums(): Observable<number[]> {
        let result: number[] = [this.nums[0]];
        return this.numbers.pipe(
            map(numbs => {
                for (let i = 1; i < numbs.length; i++) {
                    result.push(numbs[i] + result[i - 1])
                    //let i = 1 because number 3 is not calculate in numbs arr. we have start with number 1 or index 1
    //first round result = [3]    
    //second round result [3,4] because numbs[i] = 1  --- + result[i - 1] = 3
    //thirty round result [3,4,6] because numbs[i] = 2 --- + result[i - 1] = 4
                }
                return result;
            })
        );
    }

    ngOnInit(): void {
        this.defineNums().subscribe(us => console.log(us)
        );
    }
}

