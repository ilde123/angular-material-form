import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public query: string;
  public result: string = '';
  public value: any;
  @Input() labelButton: string = '';
  public charactersSearch: any;
  public messageNoResults: string = '';
  public noName: string = '';
  public noId: string = '';
  public charname: string = '';
  public charid: string = '';
  constructor(private rickmortyService: RickMortyService) {
    this.query = '';
  }

  searchById(input: any) {
    // validar input
    if (input.valid) {
      // buscar por id
      this.rickmortyService.getCharactersById(input.value).subscribe(
        (data) => {
          this.charactersSearch = [data];
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }

  searchByName(input: any) {
    // validar input
    if (input.valid) {
      // buscar por nombre
      this.rickmortyService.getCharactersByName(input.value).subscribe(
        (data) => {
          this.charactersSearch = data.results;
          this.noName = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.noName =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
