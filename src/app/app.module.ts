import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { PublicationCreateComponent } from './components/publication-create/publication-create.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './generic-components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogPublicationComponent } from './components/dialog-publication/dialog-publication.component';
import { PublicationsFoundComponent } from './components/publications-found/publications-found.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';

// Importing the pagination module for the application.
import { NgxPaginationModule } from 'ngx-pagination';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ErrorHandlerController } from './generic-components/ErrorHandlerController';

//Imports Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserServicesComponent } from './components/user-services/user-services.component';
import { UserPublicationsComponent } from './components/user-publications/user-publications.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';

@NgModule({
  declarations: [AppComponent, PublicationListComponent, PublicationCreateComponent, DialogPublicationComponent, PublicationsFoundComponent, HomepageComponent, SignInComponent, LogInComponent, ProfileComponent, UserServicesComponent, UserPublicationsComponent, ServicesListComponent, EditProfileComponent, UpdateServiceComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MaterialModule, BrowserAnimationsModule, NgbModule, ReactiveFormsModule, NgxPaginationModule, Ng2SearchPipeModule, ErrorHandlerController,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  providers: [ErrorHandlerController],
  bootstrap: [AppComponent],
  entryComponents: [DialogPublicationComponent]
})
export class AppModule { }
