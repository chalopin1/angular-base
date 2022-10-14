import { Component } from "@angular/core";

@Component({
    selector : 'aap-component',
    template : `
    <h1>Contador App</h1>
    <h1>base: {{acum}}</h1>
    <button (click)="acumular(acum)">{{acum}}<</button>
    <span> {{ numero }} </span>
     <button (click)="acumular(-acum)">-{{acum}}<</button>
         
    `

})
export class ContadorComponent {
    title = 'bases';
    numero:number=4;
    acum:number=4;  
    acumular(valor:number){
      this.numero +=valor
    } 
}