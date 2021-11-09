import {Component, OnInit} from '@angular/core';
import {SearchPageService} from './search-page.service';
import {mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {WishlistService} from '../../core/wishlist.service';
import {UserService} from '../../core/user.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public books: any[] = [];
  public modalBook;
  public searchForm: FormGroup;
  public addedToWishlist = false;
  public wishlist: any[] = [];
  public userName: string = '';
  items = [];
  currentPage = 1;
  closeResult = '';

  constructor(private searchPageService: SearchPageService, private modalService: NgbModal, private wishlistService: WishlistService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.getDateFromStorage();
    this.setSearchForm();
    this.getAllBooks();
  }

  getDateFromStorage(): void{
    this.wishlist = this.wishlistService.getWishlist();
    this.userName = this.userService.getUserName();
  }

  getAllBooks() {
    this.searchPageService.getAllBooks().pipe(
      mergeMap((res) => {
        this.books = res.items;
        return of(res);
      })).subscribe();
  }

  setSearchForm(): void {
    this.searchForm = new FormGroup({
      searchTitle: new FormControl('')
    })
  }

  getBookByTitle(event): void {
    this.currentPage = 1;
    const searchValue = this.searchForm.controls.searchTitle.value;
    this.searchPageService.getBookByTitle(searchValue).pipe(
      mergeMap((res) => {
        this.books = res.items;
        return of(res);
      })).subscribe();
  }

  openDialogBox(content, bookId): void {
    this.modalBook = this.books.find(b => b.id === bookId);
    if (this.isExistInWishlist()) {
      this.addedToWishlist = true;
    } else {
      this.addedToWishlist = false;
    }
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  isExistInWishlist(): boolean {
    return this.wishlist?.find(b => b.id === this.modalBook.id);
  }

  addToWishlist(): void {
    this.wishlist.push(this.modalBook);
    this.wishlistService.upadateWishlist(this.wishlist);
    this.addedToWishlist = true;
  }


  removeFromWishlist(): void {
    this.wishlist = this.wishlist.filter(b => b.id !== this.modalBook.id);
    this.wishlistService.upadateWishlist(this.wishlist);
    this.addedToWishlist = false;
  }

}
