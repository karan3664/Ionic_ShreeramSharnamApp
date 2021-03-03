import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-prayercenters',
  templateUrl: './prayercenters.page.html',
  styleUrls: ['./prayercenters.page.scss'],
})
export class PrayercentersPage implements OnInit {
  PrayerCentres: any;

  constructor(private authService: AuthService, private loader: LoaderService, private iab: InAppBrowser
  ) {
    this.getPrayerCentres();

  }

  ngOnInit() {
  }
  getPrayerCentres() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'prayer_centre.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();

        this.PrayerCentres = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  OpenWeb(message) {
    // const browser = this.iab.create(me);

    // browser.show();
    window.open(message, '_blank');
    console.log(message);
  }
}
