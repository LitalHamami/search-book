import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CONSTANTS} from './constant';
import {IsLoginGuard} from './core/guards/is-login.guard.service';

const routes: Routes = [
  {
    path: CONSTANTS.ROUTES.WELCOME_PAGE,
    loadChildren: () => import('./feature/welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: CONSTANTS.ROUTES.SEARCH_PAGE,
    loadChildren: () => import('./feature/search-page/search-page.module').then(m => m.SearchPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: CONSTANTS.ROUTES.WISHLIST_PAGE,
    loadChildren: () => import('./feature/wishlist-page/wishlist-page.module').then(m => m.WishlistPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: '**',
    redirectTo: CONSTANTS.ROUTES.WELCOME_PAGE
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
