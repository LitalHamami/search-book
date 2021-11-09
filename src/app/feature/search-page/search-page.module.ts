import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchPageRoutingModule} from './search-page.routing.module';
import {SearchPageComponent} from './search-page.component';
import {SearchPageService} from './search-page.service';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [SearchPageService]
})
export class SearchPageModule { }
