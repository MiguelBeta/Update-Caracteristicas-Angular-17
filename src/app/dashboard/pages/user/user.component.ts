import { User } from './../../../interfaces/request-response';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel() "/>

    @if ( user() ) {
      <section>
        <img
          [srcset]="user()!.avatar "
          [alt]="user()!.first_name"
          />

          <div>
            <h3> {{ user()?.first_name }} {{ user()?.last_name }} </h3>
            <p> {{ user()?.email }} </p>
          </div>

      </section>
    } @else {
      <p>Cargando Información</p>
    }

  `
})
export default class UserComponent {


  //Trae todas los argumentos del url
  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({ id }) => this.usersService.getUserById( id ) )
      )
    );

  public titleLabel = computed( () => {
    if( this.user() ){
      return `Informacion del usuario: ${ this.user()?.first_name } ${
        this.user()?.last_name
      }`;
    }

    return 'Informacion del usuario';

  });


  // public user = signal<User | undefined>(undefined);

  // constructor() {
  //   this.route.params.subscribe( params => {
  //     console.log({params});
  //   })
  // }

}
