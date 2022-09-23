import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})

export class SorteioComponent implements OnInit {
  value: Array<number> =  [0,1,2,3,4,5,6,7,8,9];
  numero: number = 0;

  constructor(){
  }

  ngOnInit(): void {
  }
}

function increment(params:number){
  delay(1000);
  if(params < 10){
    params++;
  }else{
    params = 0;
  }
  return params;
}

