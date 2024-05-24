import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-alg-log10',
  templateUrl: './alg-log10.component.html'
})
export class AlgLog10Component {

  filteredFriends: Observable<any[]> = of()

  randAssocA: any = [
    { name: "lepi" },
    { name: "zamo" },
    { name: "esnaf" }
  ]
  itemText: { [key: string]: string[] } = {}

  constructor() {
    this.itemText = {
      A: ["a1", "a2", "a3"],
      B: ["b1", "b2", "b3"],
      C: ["c1", "c2", "c3"],
    }
  }

  promeni(randAss: any, column: string, index: number) {
    this.itemText[column][index] = randAss.name
  }

  //   allMyFriends:Observable<Friend[]> = of([
  //     {id:1, name:"mesud"},
  //     {id:2, name:"skome"},
  //     {id:2, name:"mujan"},
  //     {id:2, name:"zamo"},
  //     {id:5, name:"lepi"},
  //     {id:6, name:"lepi"},

  //    ])

  // mapa = new Map();
  //  func(){
  // const uniqueMap = new Map();
  // const emptyMap = [];
  //   this.allMyFriends.subscribe((friends: Friend[])=>{
  //     friends.forEach((frnds: Friend) =>{
  //       if(!uniqueMap.has(frnds.id))
  //            uniqueMap.set(frnds,true);
  //           emptyMap.push(frnds)
  //           console.log(emptyMap);
  //     })
  //   })
  // }

}
