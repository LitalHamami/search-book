import { Component } from '@angular/core';
import {CONSTANTS} from "./constant";
import {Router} from "@angular/router";
import {UserService} from "./core/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'search-book';
  public constants = CONSTANTS;

  constructor(private router: Router, private userService: UserService) {
  }

  isLogin(): boolean {
    return this.userService.isLogin();
  }

  logOut(): void{
    this.userService.logout();
    this.router.navigate(['']);
  }
}

