//Componente principal
import { Component } from '@angular/core';

@Component({
  //Dicha etiqueta va a ser reemplazada por el contenido de este componente
  selector: 'app-root',
  //Rutas del componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Alberga los tipos dinámicos que se incorporan en HTML
export class AppComponent {
  name = 'Julio Beverido';
}
