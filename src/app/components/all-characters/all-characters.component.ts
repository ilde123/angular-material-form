import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss']
})
export class AllCharactersComponent implements OnInit {

  // array de caracteres
  public characters: any[] = [];
  // mensaje de error
  public messageNoResults: string = '';
  
  constructor(private charactersService: RickMortyService) { }

  ngOnInit(): void {
    this.messageNoResults = '';
    this.charactersService.getCharacters().subscribe(
      (data) => {
        this.characters = data.results;
        this.messageNoResults = '';
      },
      (error) => {
        this.characters = [];
        this.messageNoResults =
          'Consulta errónea. No se encontraron resultados';
      }
    );
  }

}
