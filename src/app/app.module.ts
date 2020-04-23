import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';
import { PublicationCreateComponent } from './components/publication-create/publication-create.component';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './generic-components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogPublicationComponent } from './components/dialog-publication/dialog-publication.component';

@NgModule({
  declarations: [AppComponent, PublicationListComponent, PublicationCreateComponent, DialogPublicationComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MaterialModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogPublicationComponent]
})
export class AppModule { }
