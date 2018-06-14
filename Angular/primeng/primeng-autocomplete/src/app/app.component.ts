import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public capitalList: any[];
  public autoFilterList: any[];
  public text: string;

  ngOnInit() {
    this.capitalList = this.autoFilterList = [
      'Cadiz',
      'Sevilla',
      'Malaga',
      'Almeria',
      'Cordoba',
      'Jaen'
    ];
  }

  /**
   * Método que actualiza la lista de opciones según la cadena escrita
   * Hay que hacer una nueva asignación, para que se active el setter de primeng (immutable = true)
   * @param event Evento devuelto por primeng (en event.query viene el texto introducido)
   */
  search(event: any) {
    this.autoFilterList = this.capitalList.filter(
      e => e.indexOf(event.query) !== -1
    );
  }
}
