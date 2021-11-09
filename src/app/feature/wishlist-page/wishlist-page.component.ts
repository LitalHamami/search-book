import { Component, OnInit } from '@angular/core';
import {WishlistService} from '../../core/wishlist.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {

  public wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
  }

  removeFromWishlist(bookId): void {
    this.wishlist = this.wishlist.filter(b => b.id !== bookId);
    this.wishlistService.upadateWishlist(this.wishlist);
  }

}
