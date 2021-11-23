import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-app';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    // ruta de navegacion
    this.navLinks = [
        {
            label: 'Inicio',
            link: './home',
            icon: 'home',
            index: 0
        }, {
            label: 'Listados de personajes',
            link: './listado',
            icon: 'list',
            index: 1
        }, {
            label: 'Buscador de personajes',
            link: './search',
            icon: 'search',
            index: 2
        }, 
    ];
}
}
