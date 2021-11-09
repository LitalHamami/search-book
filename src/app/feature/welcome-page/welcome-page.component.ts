import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CONSTANTS} from'../../constant';
import {Router} from '@angular/router';
import {UserService} from '../../core/user.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  public registerForm: FormGroup;
  public userNameErrorMsg: string = 'Please fill your user name';
  public showUserNameErrorMsg = false;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.userService.isLogin()) {
      this.navigateToSearchPage();
    } else {
      this.setLoginForm();
    }
  }

  setLoginForm(): void{
    this.registerForm = new FormGroup({
      userName: new FormControl('', [Validators.required])
    });
  }

  logIn(): void {
    if (this.registerForm.valid) {
      this.navigateToSearchPage();
      this.login();
    } else {
      this.handleFormErrors();
    }
  }

  login(): void{
    this.userService.login(this.registerForm.controls.userName.value);
  }

  handleFormErrors(): void{
    this.showUserNameErrorMsg = true;
  }

  navigateToSearchPage(): void {
    this.router.navigate([CONSTANTS.ROUTES.SEARCH_PAGE]);
  }

  onInput(event): void{
    console.log("on input")
    if(event.data){
      this.showUserNameErrorMsg = false;
    } else{
      this.showUserNameErrorMsg = true;
    }
  }
}
