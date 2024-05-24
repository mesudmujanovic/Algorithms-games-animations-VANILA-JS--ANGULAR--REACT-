package com.algorithms.algoLog.sort;

public class Sorts {

    public static int  sort(){
        int[] sortArr = new int[]{7,2,1,9,5,8};
        int max = sortArr[0];
        for (int i = 0; i < sortArr.length -1; i++) {
            if(sortArr[i] > max){
                max = sortArr[i];
            }
        }
        if(max > 0){
            System.out.println("najveci broj je " +max);
        }
        return max;
    }

    public static int[] bubleSort(){
        int[] array = new int []{64, 20, 15, 11, 33, 24, 50, 40, 90, 34, 12};
        for (int i = 0; i < array.length ; i++) {
            for (int j = 0; j < array.length - i -1 ; j++) {
                if(array[j] > array[j + 1]){
                    // if 64 > 20
                    // temp = 64
                    //64 = 20
                    //20 = 64
                    // array  = {20,64}
                    // array.length -i(0) -1 = {20, 64, 15, 11, 33, 24, 50, 40, 90, 34, 12};
                    //array.length second round = {64, 15, 11, 33, 24, 50, 40, 90, 34, 12};
                    //repeat
                    int temporary = array[j];
                    array[j] = array[j + 1];
                    array[j+1] = temporary;
                }
            }
        }
        for (int element : array) {
            System.out.print(element + " ");
        }
        return array;
    }
}
