import {Injectable} from '@angular/core';

@Injectable()
export class WishlistService {
  constructor() {
  }

  upadateWishlist(wishList): void{
    sessionStorage.setItem('wishlist', JSON.stringify(wishList))
  }

  getWishlist(): any[]{
    return JSON.parse(sessionStorage.getItem('wishlist')) || []
  }



}
