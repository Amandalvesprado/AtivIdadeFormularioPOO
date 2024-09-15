import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  operacao: string = '';
  resultado: number | null = null;

  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        if (this.numero2 !== 0) {
          this.resultado = this.numero1 / this.numero2;
        } else {
          this.resultado = null;
          alert('Divisão por zero não é permitida!');
        }
        break;
      default:
        this.resultado = null;
        alert('Operação inválida!');
    }
  }
}
