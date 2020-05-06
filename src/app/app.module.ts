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
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [AppComponent, PublicationListComponent, PublicationCreateComponent, DialogPublicationComponent, PublicationsFoundComponent, SignInComponent, LogInComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MaterialModule, BrowserAnimationsModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogPublicationComponent]
})
export class AppModule { }
