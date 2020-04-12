import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationCreateComponent } from 'src/app/components/publication-create/publication-create.component';
import { PublicationListComponent } from 'src/app/components/publication-list/publication-list.component';



const routes: Routes = [
  { path: 'publicationCreate', component: PublicationCreateComponent },
  { path: 'publicationList', component: PublicationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
