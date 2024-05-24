import { Component } from "@angular/core";

@Component({
  selector: 'app-alg4',
  template: ``
})

export class Alg4Component {


  sort() {
    const arr = [7, 2, 9, 1, 5, 8];
    const n = arr.length;
    let max = arr[0];
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > max) {
        max = arr[j]
      }
    }
    return max;
  }


  ngOnInit() {
    this.sort();
    this.bubbleSort();
    console.log(this.bubbleSort());
      console.log(this.sort());
      
  }

  bubbleSort(): number[] {
    const arr = [64, 20, 15, 11, 33, 24, 50, 40, 90, 34, 12]; // Definišemo niz unutar funkcije
    const n = arr.length;
    let swapped;

    for (let i = 0; i < arr.length; i++) {
      swapped = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
    }

    return arr;
  }

}
