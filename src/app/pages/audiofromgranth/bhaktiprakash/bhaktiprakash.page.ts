import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-bhaktiprakash',
  templateUrl: './bhaktiprakash.page.html',
  styleUrls: ['./bhaktiprakash.page.scss'],
})
export class BhaktiprakashPage implements OnInit {
  Bhaktiprakash: any;
  imei: any;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private loader: LoaderService,
    private storageService: StorageService
  ) {
    
    this.getBhaktiprakash();
   
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;

    });
  }


  ngOnInit() {
  }
  getBhaktiprakash() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'bhaktiprakash.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.Bhaktiprakash = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }

  addtoplaylistbhakti(bhakti) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: bhakti.url,
      image: bhakti.image,
      title: bhakti.title,
      type: 'Granths_Bhakti'
    };
    console.log(data);
    this.authService.SavePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          bhakti.title + ' ' + 'Added To PlayList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
  addtodownloadlistbhakti(bhakti) {
      // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: bhakti.url,
      image: bhakti.image,
      title: bhakti.title,
      type: 'Granths_Bhakti'
    };
    console.log(data);
    this.authService.SaveDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          bhakti.title + ' ' + 'Added To DownloadList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
}
