import { Component, OnInit } from '@angular/core';
import { ContactoService } from './contactos/contacto.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactoService]
})
export class AppComponent implements OnInit {
  title = 'contactos-app';
  loggedIn = false;

  constructor(private loginService: LoginService) {}
  
  ngOnInit(): void {}

  onLogIn() {
    this.loginService.logIn();
    this.updateVariable();
  }

  onLogOut() {
    this.loginService.logOut();
    this.updateVariable();
  }

  updateVariable () {
    this.loginService.isAuthenticated()
      .then((authenticated: boolean) => {
        this.loggedIn = authenticated;
      });
  }
}
