import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss']
})
export class GalleryPage implements OnInit {
  Wallpaper: any;
  constructor(
    private authService: AuthService,
    private photoViewer: PhotoViewer,
    private loader: LoaderService
  ) {}

  ngOnInit() {
    this.getWallpaper();
  }

  getWallpaper() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'wallpaper.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
       
        this.loader.loadingDismiss();
        this.Wallpaper = res;
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
