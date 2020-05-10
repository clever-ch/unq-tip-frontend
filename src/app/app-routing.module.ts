import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationCreateComponent } from 'src/app/components/publication-create/publication-create.component';
import { PublicationListComponent } from 'src/app/components/publication-list/publication-list.component';
import { PublicationsFoundComponent } from 'src/app/components/publications-found/publications-found.component';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  { path: 'publicationCreate', component: PublicationCreateComponent },
  { path: 'publications', component: PublicationListComponent },
  { path: 'allPublicationsFound', component: PublicationsFoundComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
