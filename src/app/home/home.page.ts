import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado = 0;

  calcula() {
    let valor = 100;
    let valorCorrigido = 0;

   // this.calcularJuros(valor);
   // this.calcularMulta(valor);
    this.calculaJuros(valor)
      .then((result: number) => {
        valorCorrigido = result;
      this.calculaMulta(valor)
        .then((result2: number) => {
          valorCorrigido = result2;
          this.resultado = valorCorrigido;
        });
      });
  }

  calculaJuros(valorBase: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (valorBase > 0) {
        let result1 = 0;
        let juros = 0.1;

        result = valorBase + (valorBase * juros);
        resolve(result);
      } else {
        reject('O valor deve ser maior que zero');
      }
    });
  }
  calculaMulta(valorBase: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (valorBase > 0) {
        let result1 = 0;
        let juros = 0.1;

        result = valorBase + (valorBase * juros);
        resolve(result);
      }else{
        reject('O valor deve ser maior que zero');
      }
    });
  }
}
