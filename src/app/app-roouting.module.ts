import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from '../app/images/images.component';

const routes: Routes = [
    { path: 'images', component: ImagesComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}