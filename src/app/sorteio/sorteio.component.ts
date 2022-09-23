import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})

export class SorteioComponent implements OnInit {

  public a: number = 0;
  public b: number = 1;
  public c: number = 2;
  public d: number = 3;
  public e: number = 4;
  public f: number = 5;
  public cupomSorteado = false;

  constructor() {

  }


  ngOnInit(): void {
    this.increment();
  }

  increment() {
    var temp = 0;
    var intervalo = 0;
    var interTemp = 20;

    var sorteio = setInterval(() => {

      if(intervalo < 20)
        this.f = this.f < 9 ? this.f + 1 : 0;
      if(intervalo < 35)
        this.e = this.e < 9 ? this.e + 1 : 0;
      if(intervalo < 55)
        this.d = this.d < 9 ? this.d + 1 : 0;
      if(intervalo < 75)
        this.c = this.c < 9 ? this.c + 1 : 0;
      if(intervalo < 100)
        this.b = this.b < 5 ? this.b + 1 : 0;
      if(intervalo < 160)
        this.a = this.a < 2 ? this.a + 1 : 0;

      if(intervalo >= 200)
        clearInterval(sorteio);

      if(!this.cupomSorteado == true){
        temp = temp < 5 ? temp + 1 : 0;
        intervalo++;
      }


    }, 50);


  }




  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}



