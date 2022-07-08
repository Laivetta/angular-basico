import { Component, Input } from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface"

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  @Input("data") personajes: Personaje[] = [];
  //data es lo que voy a recibir del componente padre y lo que recibo se lo asigno a la propiedad personajes, que tiene la forma de la interfaz
  //imput permite recibir datos del componente padre
  //personajes es una propiedad,
  //Personaje es una interfaz

}
