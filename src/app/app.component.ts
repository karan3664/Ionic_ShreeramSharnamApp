import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { IonRouterOutlet, Platform, ModalController, NavController, MenuController, PopoverController, ActionSheetController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { StorageService, MobileDevice } from './services/storage.service';
import { HomePage } from '../app/home/home.page'
import { ToastService } from './services/toast.service';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']

})

export class AppComponent {
  UniqueDeviceID: string;
  rootPage: any = HomePage;
  newItem: MobileDevice = {} as MobileDevice;
  root: any = 'SplashPage';
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public appPages = [
    {
      title: 'Home',
      url: '/home'
      // icon: 'home'
    },
    {
      title: 'About Us',
      url: '/about-us',
      status: true
    },
    {
      title: 'Peerage',
      url: '/peerage',
      status: true
    },
    {
      title: 'Prayer Center',
      url: '/prayer-center',
      status: true
    },
    {
      title: 'Sadhna Satsang',
      url: '/sadhna-satsang',
      status: true
    },
    {
      title: 'Gallery',
      url: '/gallery',
      status: true
    },
    {
      title: 'Shree Amritvani',
      url: '/shree-amritvani',
      status: true
    },
    {
      title: 'Bhajans',
      url: '/bhajans',
      status: true
    },
    {
      title: 'Dhuns',
      url: '/dhuns',
      status: true
    },
    {
      title: 'Pravachan',
      url: '/pravachan',
      status: true
    },
    {
      title: 'E-Books',
      url: '/e-books',
      status: true
    },
    {
      title: 'Audio From Granths',
      url: '/audio-from-granth',
      status: true
    },

    {
      title: 'News Letter',
      url: '/news-letter',
      status: true
    },
    {
      title: 'Jaap Count',
      url: '/jaap-count',
      status: true
    },
    {
      title: 'Poornima Jaap Days',
      url: '/poornima-jaap-countdays',
      status: true
    },
    {
      title: 'Naam Deeksha',
      url: '/naam-deeksha',
      status: true
    },
    {
      title: 'Play List',
      url: '/playlist',
      status: true
    },
    {
      title: 'Download List',
      url: '/downloadlist',
      status: true
    },
    {
      title: 'Notifications',
      url: '/notifications/:price',
      status: true
    }
    // ,
    // {
    //   title: 'Like us on facebook',
    //   url: '/likefacebook',
    //   status: true
    // },
    // {
    //   title: 'Join us on facebook',
    //   url: '/joinfacebook',
    //   status: true
    // }
  ];

  device_token: any;

  imei: any;
  uniqueDeviceIdStr: '';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM,
    private router: Router,
    private authService: AuthService,
    private uid: Uid,
    private device: Device,
    private uniqueDeviceID: UniqueDeviceID,
    private androidPermissions: AndroidPermissions,
    private storageService: StorageService,
    private iab: InAppBrowser,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private route: Router,
    private toast: ToastService
  ) {

    this.initializeApp();


    // this.uniqueDeviceID.get()
    //   .then((uuid: any) =>
    //     this.storageService.saveIMEI(uuid).then(item => {
    //       console.log('UUID =>' + item)
    //     })
    //   )
    // .catch((error: any) => console.log(error));

    // console.log('NEW UUID => ' + uuid)


    // this.backButtonEvent();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.androidPermissions.requestPermissions(
        [
          this.androidPermissions.PERMISSION.READ_PHONE_STATE,
          this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
          this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        ]
      );


      // window.location.reload();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString("ff9340");
      this.fcm.getToken().then(token => {
        console.log(token);
        // this.device_token = token;
        this.storageService.saveToken(token).then(item => {

          console.log("TOKEN => " + " " + item);

        });

        this.storageService.saveIMEI(token).then(item => {
          console.log('UUID =>' + item)
        });

        this.storageService.getToken().then(res => {
          console.log('IMEIBHAJANTOKEN => ' + res)
          this.device_token = res;
          const data = {
            device_token: res

          }
          this.authService.AddDeviceToken(data).subscribe(
            (res: any) => {
              console.log(res);
              console.log('DATA => fazal' + res);

            },
            (error: any) => {
              console.log('error');
              console.log('DATA => Mehul' + error);
            }
          );

        });


      });

      this.platform.backButton.subscribe(() => {
        document.addEventListener("backbutton", () => {
          this.routerOutlets.forEach((outlet: IonRouterOutlet) => {


            if (outlet && outlet.canGoBack()) {
              outlet.pop();
            } else if (this.router.url === "/home") {
              navigator['app'].exitApp(); // work for ionic 4
            } else if (!outlet.canGoBack()) {
              navigator['app'].exitApp(); // work for ionic 4
            }
            else {
              window.history.back();
            }
          });
        });
      });
      // this.fcm.onNotification().subscribe(data => {
      //   console.log(data);
      //   if (data.wasTapped) {
      //     console.log('Received in background');
      //     this.router.navigate([data.landing_page, data.price]);
      //   } else {
      //     console.log('Received in foreground');
      //     this.router.navigate([data.landing_page, data.price]);
      //   }
      // });
      // this.fcm.onTokenRefresh().subscribe(token => {




      // });

      // return;
    });


  }


  ngOnInit() {



  }


  JoinFacebook() {
    window.open('https://www.facebook.com/groups/shreeramsharnamnewdelhi/', '_blank')
  }
  LikeFacebook() {
    window.open('https://www.facebook.com/ShreeRamSharnam.AmritvaniSatsang.NewDelhi', '_blank')
  }
  SubscribeYoutube() {
    window.open('https://www.youtube.com/channel/UCY4tSo17wvw2cA-1mmcf6ow', '_blank')
  }

  // active hardware back button
  // backButtonEvent() {
  //   this.platform.backButton.subscribe(async () => {

  //     document.addEventListener("backbutton", () => {
  //       this.routerOutlets.forEach((outlet: IonRouterOutlet) => {


  //         if (outlet && outlet.canGoBack()) {
  //           outlet.pop();
  //         } else if (this.route.url === "/home") {
  //           navigator['app'].exitApp(); // work for ionic 4
  //         } else if (!outlet.canGoBack()) {
  //           navigator['app'].exitApp(); // work for ionic 4
  //         }
  //         else {
  //           window.history.back();
  //         }
  //       });
  //     });

  //   });
  // }

}
