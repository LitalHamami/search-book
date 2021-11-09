import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  constructor() {
  }

  isLogin(): boolean{
    return JSON.parse(sessionStorage.getItem('userName'));
  }

  login(userName): void{
    sessionStorage.setItem('userName', JSON.stringify(userName))
  }

  logout(): void{
    sessionStorage.removeItem('userName');
  }

  getUserName(): string{
    return JSON.parse(sessionStorage.getItem('userName'));
  }

}
