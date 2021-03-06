import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationCreateComponent } from 'src/app/components/publication-create/publication-create.component';
import { PublicationListComponent } from 'src/app/components/publication-list/publication-list.component';
import { PublicationsFoundComponent } from 'src/app/components/publications-found/publications-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LogInComponent } from 'src/app/components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorPageComponent } from '././generic-components/error-page/error-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserServicesComponent } from './components/user-services/user-services.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { UserPublicationsComponent } from './components/user-publications/user-publications.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'createPublication', component: PublicationCreateComponent },
  { path: 'publications', component: PublicationListComponent },
  { path: 'allPublicationsFound', component: PublicationsFoundComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'errorPage', component: ErrorPageComponent },
  { path: 'editProfile', component: EditProfileComponent},
  { path: 'userServices', component: UserServicesComponent },
  { path: 'servicesList', component: ServicesListComponent },
  { path: 'userPublications', component: UserPublicationsComponent },
  { path: 'updateService/:id/:type', component: UpdateServiceComponent },
  { path: 'createService', component: CreateServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
