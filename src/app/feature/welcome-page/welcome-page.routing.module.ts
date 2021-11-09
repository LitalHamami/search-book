import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomePageComponent} from './welcome-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomePageRoutingModule { }
