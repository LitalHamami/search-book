import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WelcomePageRoutingModule} from './welcome-page.routing.module';
import {WelcomePageComponent} from './welcome-page.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    WelcomePageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class WelcomePageModule { }
