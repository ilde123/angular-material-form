import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: CharacterDetailComponent
  },
  {
    path: 'search',
    component: CharacterSearchComponent
  },
  {
    path: 'listado',
    component: AllCharactersComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
