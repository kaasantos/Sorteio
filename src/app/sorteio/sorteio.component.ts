import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})

export class SorteioComponent implements OnInit {
  value: Array<number> =  [0,1,2,3,4,5,6,7,8,9];

  constructor(){
  }

  ngOnInit(): void {
  }
}

