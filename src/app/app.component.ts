import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from "../../src/app/services/auth-service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activeLang = 'es';

  constructor(private translate: TranslateService, public authService: AuthService) {
    translate.setDefaultLang(this.activeLang);
  }
  title = 'unq-tip-frontend';

  useLanguage(language: string) {
    this.activeLang = language;
    this.translate.use(language);

  }
}
