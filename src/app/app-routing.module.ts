import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationCreateComponent } from 'src/app/components/publication-create/publication-create.component';
import { PublicationListComponent } from 'src/app/components/publication-list/publication-list.component';
import { PublicationsFoundComponent } from 'src/app/components/publications-found/publications-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'publicationCreate', component: PublicationCreateComponent },
  { path: 'publications', component: PublicationListComponent },
  { path: 'allPublicationsFound', component: PublicationsFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
