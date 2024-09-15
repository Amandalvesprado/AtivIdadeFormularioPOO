import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-media',
  templateUrl: './calc-media.component.html',
  styleUrls: ['./calc-media.component.css']
})
export class CalcMediaComponent {
  notas = {
    ac1: 0,
    ac2: 0,
    ag: 0,
    af: 0
  };

  media: number | null = null;
  resultado: string = '';

  calcularMedia() {
    const { ac1, ac2, ag, af } = this.notas;
    this.media = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);

    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
