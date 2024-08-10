import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ConfigService } from "./services/config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements OnInit {
  constructor(public translate: TranslateService, public srv: ConfigService) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }

  ngOnInit(): void {
    console.log(this.srv.getConfig().data.api_url);
  }
}
