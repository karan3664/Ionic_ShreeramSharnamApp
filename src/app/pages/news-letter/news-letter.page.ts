import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.page.html',
  styleUrls: ['./news-letter.page.scss']
})
export class NewsLetterPage implements OnInit {
  NewsLetter: any;
  constructor(
    private authService: AuthService,
    private file: File,
    private platform: Platform,
    // tslint:disable-next-line: deprecation
    private transfer: FileTransfer,
    public alertController: AlertController,
    private fileOpener: FileOpener,
    private toastService:  ToastService,
    private loader: LoaderService
    
  ) {}

  ngOnInit() {
    this.getNewsLetter();
  }

  getNewsLetter() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'newsletter.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.loader.loadingDismiss();
        this.NewsLetter = res;
       
      },
      (error: any) => {
        this.loader.loadingDismiss();
        console.log('error');
      }
    );
  }
  async downloadandopenbook(url, title) {
    const alert = await this.alertController.create({
      header: title,
      message: 'Download News Letter',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Download',
          handler: () => {
            let path = null;
            if (this.platform.is('ios')) {
              path = this.file.documentsDirectory;
            } else {
              path = this.file.externalRootDirectory + '/ShreeRamSharnam/';
            }
        

            const transfer = this.transfer.create();
            console.log(url);

            this.loader.loadingPresent('Downloading....Please wait it will take time to download!');
            transfer.download(url, path + title + '.pdf').then(entry => {
              const urls = entry.toURL();
              console.log(urls);
              this.loader.loadingDismiss();
              this.fileOpener.showOpenWithDialog(path + title + '.pdf', 'application/pdf')

                .then(() =>

                  console.log('File is opened'))

                .catch(e => console.log('Error opening file', e));
              // this.document.viewDocument(urls, 'application/pdf', {});
            });
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}