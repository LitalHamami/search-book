import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WishlistPageRoutingModule} from './wishlist-page.routing.module';
import {WishlistPageComponent} from './wishlist-page.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [WishlistPageComponent],
  imports: [
    CommonModule,
    WishlistPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})

export class WishlistPageModule { }
