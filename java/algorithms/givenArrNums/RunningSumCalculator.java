package com.algorithms.algoLog.givenArrNums;

import java.util.ArrayList;
import java.util.List;

public class RunningSumCalculator {
    // Given an array nums. We define a running sumd of an array as runningSum[i] = SubmitEvent(nums[0]...nums[i]).
    // Example:
    // Input: nums = [3,1,2,10,1]
    // Output: [3,4,6,16,17]

   public static List<Integer> calculate(){
       int[] nums = {3,1,2,10,1};
       List<Integer> result = new ArrayList<>();
       result.add(nums[0]);

       for (int i = 1; i < nums.length ; i++) {
          result.add(nums[i] + result.get(i-1));
       }
       for (int num : result){
           System.out.println(num);
       }
       return result;
   }
   
}
