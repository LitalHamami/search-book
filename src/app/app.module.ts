import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {UserService} from './core/user.service';
import {WishlistService} from './core/wishlist.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot()

  ],
  providers: [UserService, WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
