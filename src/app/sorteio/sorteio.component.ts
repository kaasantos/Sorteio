import { Component, OnInit } from '@angular/core';
import { Number } from '../models/sorteio';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})

export class SorteioComponent implements OnInit {
  sorteados: Number = new Number();

  constructor(){}

  ngOnInit(): void {
  }

}
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
