import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { AppComponent } from './app.component';
import { MaterialModule, AppMaterialModule } from './shared/material.module';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FormState } from './app.state';
import { ImagesComponent } from './images/images.component';
import { AppRoutingModule } from './app-roouting.module';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([FormState]),
    NgxsFormPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
