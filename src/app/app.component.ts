import { LoginService } from './login/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
})

export class AppComponent {

 constructor(
 private loginService: LoginService,
 private router: Router,
 private translate: TranslateService
 ) {
   this.setAppLanguage();
 }

 setAppLanguage(){
   this.translate.setDefaultLang('en');
   this.translate.use(this.translate.getBrowserLang());
 }

 onLogout(){
   this.loginService.logout();
   this.router.navigateByUrl('/login');
 }

}
