import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WishlistPageComponent} from './wishlist-page.component';

const routes: Routes = [
  {
    path: '',
    component: WishlistPageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class WishlistPageRoutingModule { }
