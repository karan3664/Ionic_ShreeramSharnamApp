import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  // help: any = '';
  price: any = '';
  SendNotificaion: any;
  constructor(private route: ActivatedRoute,
    private loader: LoaderService,
    private authService: AuthService,
    private photoViewer: PhotoViewer) {
    this.price = this.route.snapshot.params['price'];
    // this.activatedRoute.snapshot.paramMap.get('title')

  }


  ngOnInit() {

    this.getAudioDhuns();
  }

  getAudioDhuns() {
    this.loader.loadingPresent();

    this.authService.GetAllNotificaton('data').subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.SendNotificaion = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  OpenImage(image) {
    this.photoViewer.show(image);
  }
}
