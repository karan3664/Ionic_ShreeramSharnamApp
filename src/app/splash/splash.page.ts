import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private navCtrl: NavController, public splashScreen: SplashScreen) { }

  ngOnInit() {
    this.splashScreen.hide();

    setTimeout(() => {
      this.navCtrl.navigateRoot('home');
    }, 4000);
  }


}
