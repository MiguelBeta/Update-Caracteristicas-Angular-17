import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal( [ 'Angular','Vue','Svelte','Qwik','React' ] );

  public frameworks2 = signal( [ 'Angular'] );



  public toogleContent() {
    //Cambio el estado del valor actual (booleano) al contrario
    this.showContent.update( value => !value );


  }

}
