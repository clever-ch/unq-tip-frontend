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
import { ErrorHandlerSignin } from './generic-components/errorHandlerSignin';

@NgModule({
  declarations: [AppComponent, PublicationListComponent, PublicationCreateComponent, DialogPublicationComponent, PublicationsFoundComponent, HomepageComponent, SignInComponent, LogInComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MaterialModule, BrowserAnimationsModule, NgbModule, ReactiveFormsModule, NgxPaginationModule, Ng2SearchPipeModule, ErrorHandlerSignin,
    TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (http: HttpClient) => {
        return new TranslateHttpLoader(http);
      },
      deps: [ HttpClient ]
    }
  })],
  providers: [ErrorHandlerSignin],
  bootstrap: [AppComponent],
  entryComponents: [DialogPublicationComponent]
})
export class AppModule { }
