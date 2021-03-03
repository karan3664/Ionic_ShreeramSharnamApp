import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, IonRouterOutlet, ModalController, MenuController, ActionSheetController, PopoverController, ToastController } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

 
  UniqueDeviceID: string;
  // This property will save the callback which we can unsubscribe when we leave this view
  public unsubscribeBackEvent: any;
  constructor(
    public platform: Platform,
    private route: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private toast: ToastService,
    private fcm: FCM,

  ) {
    // this.unsubscribeBackEvent = this.platform.backButton.subscribeWithPriority(666666, () => {
    //   if (this.constructor.name === 'HomePage') {
    //     if (window.confirm('Do you to exit app')) {
    //       navigator['app'].exitApp();
    //     }
    //   }
    // });
    this.platform.ready()
    .then(() => {
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log("Received in background");
          this.route.navigate([data.landing_page, data.price]);
        } else {
          console.log("Received in foreground");
          this.route.navigate([data.landing_page, data.price]);
        };
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    })
  }

  ngOnInit() {
  }
  peerage() {
    this.route.navigate(['/peerage']);
  }
  dhuns() {
    this.route.navigate(['/dhuns']);
  }
  shreeAmritvani() {
    this.route.navigate(['/shree-amritvani']);
  }
  SadhnaSatsang() {
    this.route.navigate(['/sadhna-satsang']);
  }
  pravachan() {
    this.route.navigate(['/pravachan']);
  }
  Bhajans() {
    this.route.navigate(['/bhajans']);
  }
  JaapCount() {
    this.route.navigate(['/jaap-count']);
  }


}
