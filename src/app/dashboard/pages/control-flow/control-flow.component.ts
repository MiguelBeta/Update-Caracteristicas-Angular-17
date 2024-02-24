import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');


  public toogleContent() {
    //Cambio el estado del valor actual (booleano) al contrario
    this.showContent.update( value => !value );


  }

}
