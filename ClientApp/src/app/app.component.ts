import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';
import { LanguageProvider } from './services/languageProvider';

const cookieLangKey = ".AspNetCore.Culture";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LanguageProvider]
})
export class AppComponent {

  constructor(private cookieService: CookieService, private languageProvider: LanguageProvider) {  
    languageProvider.setLanguage(cookieService.get(cookieLangKey));
  }

}
