import { Component, OnInit } from "@angular/core";
import { User } from './Ialg1';
import { of, Observable, map } from 'rxjs';

@Component({
    selector: 'app-alg1',
    template: ``
})
export class Alg1Component implements OnInit {

//    create javasscript function one argument parametar
//using this defined paremeter function should filter the data by user key value and return the count value
//      

users: Observable<User[]> = of(
    [
        {name:"Mesud", address:"Igmanska", counter:10},
        {name:"Dzemil", address:"1Maj", counter:20},
        {name:"Nadija", address:"Ulica", counter:30}
    ]
);

public filterAndReturnCounter(userName: string): Observable<number>{
    return this.users.pipe(
        map( user => user.filter(
            users => users.name == userName
        )),
        map(returnCounter => {
            return returnCounter.length > 0 ? returnCounter[0].counter : 0
        })
    )
}

ngOnInit(): void {
    this.filterAndReturnCounter("Nadija").subscribe(
    user => console.log(user));
}
}
  
