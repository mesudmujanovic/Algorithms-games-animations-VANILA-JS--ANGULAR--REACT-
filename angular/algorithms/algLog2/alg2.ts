import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alg2',
    template: ``
})

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

export class Alg2Component implements OnInit{

    ngOnInit(): void {
        const nums = [15, 11, 2, 7];
        const target = 9;
        const result = this.twoSum(nums, target);
        console.log(result); 
      }
    
       twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
          //My example nums[i] = 15,11,2,7
            for (let j = 0; j < nums.length; j++) {              
            //My example first round nums[i] = 15
            // nums[j] = 15,11,2,7
            //seconds round = nums[i] = 11
            //nums[j] = 15,11,2,7
          if(nums[i] + nums[j] == target){    
            //My example 15+15 = 30, 15+ 11 = 26...
            //Seconds round = 11+15 = 26...
            //thirst = 2 + 7 = 9 GOAL
            return [i, j]
          }
            }
        }
        return null;
      }
      
}
