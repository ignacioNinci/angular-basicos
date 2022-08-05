import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || '';
      
      if (this.heroes.length == 0) {
        alert('Ya no hay mas nada por borrar');
        this.heroeBorrado = '';
      }
  }

  resetList() {
    this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Capitan America'];
  }

}
