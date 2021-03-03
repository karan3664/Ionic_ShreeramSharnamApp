import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { LoaderService } from 'src/app/services/loader.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-ramayansaar',
  templateUrl: './ramayansaar.page.html',
  styleUrls: ['./ramayansaar.page.scss'],
})
export class RamayansaarPage implements OnInit {
  Ramayansaar: any;
  imei: any;
  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private loader: LoaderService,
    private storageService: StorageService
  ) {

    this.getRamayansaar();
    this.storageService.getIMEI().then(res => {
      console.log('IMEIBHAJAN => ' + res)
      this.imei = res;

    });
  }


  ngOnInit() {
  }

  getRamayansaar() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'ramayansar.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.Ramayansaar = res;
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  addtoplaylistramayan(ramayan) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: ramayan.url,
      image: ramayan.image,
      title: ramayan.title,
      type: 'Granths_RamayanSaar'
    };
    console.log(data);
    this.authService.SavePlayList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          ramayan.title + ' ' + 'Added To PlayList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
  addtodownloadlistramayan(ramayan) {
    // this.storageService.getIMEI().then(res => {
    //   this.imei = res.imei;
    // });
    const data = {
      imei: this.imei,
      url: ramayan.url,
      image: ramayan.image,
      title: ramayan.title,
      type: 'Granths_RamayanSaar'
    };
    console.log(data);
    this.authService.SaveDownloadList(data).subscribe(
      (res: any) => {
        console.log(res);
        this.toastService.presentToast(
          ramayan.title + ' ' + 'Added To DownloadList'
        );
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
}
