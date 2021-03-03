import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageService, Item } from 'src/app/services/storage.service';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-jaap-count',
  templateUrl: './jaap-count.page.html',
  styleUrls: ['./jaap-count.page.scss']
})
export class JaapCountPage implements OnInit {
  name: number;
  jaapvalue: any;
  total: any;
  items: Item[] = [];
  newItem: Item = {} as Item;
  sum: any;
  open_pop = 0;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  bars: any;
  constructor(
    private storage: StorageService,
    public navCtrl: NavController,
    private platform: Platform,
    public alertController: AlertController
  ) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.getValue();

    }, 1000);

  }
  saveValue() {
    const date = new Date();
    this.newItem.id = date;
    this.newItem.date = date;
    this.newItem.month = date.getMonth() + 1;
    this.newItem.year = date.getFullYear();
    this.storage.addItem(this.newItem).then(item => {

      this.newItem = {} as Item;
      this.name = null;
      this.getValue();
      console.log('Fazal => ' + this.sum);
    });



    // console.log('Current Date => ', date);
  }
  getValue() {

    this.storage.getItems().then(async items => {
      this.items = items;
      console.log(JSON.stringify(items));
      const date = new Date();

      const current_month = date.getMonth() + 1;

      var jan_value: number = 0;
      var feb_value: number = 0;
      var march_value: number = 0;
      var april_value: number = 0;
      var may_value: number = 0;
      var jun_value: number = 0;
      var july_value: number = 0;
      var aug_value: number = 0;
      var sep_value: number = 0;
      var oct_value: number = 0;
      var nov_value: number = 0;
      var dec_value: number = 0;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < items.length; i++) {

        if (items[i].month === 1) {
          jan_value += items[i].jaap;
          if (jan_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ');
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;
          }
        }
        console.log('Curent_statusd => ' + this.open_pop);
        if (items[i].month === 2) {
          feb_value += items[i].jaap;
          if (feb_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 3) {
          march_value += items[i].jaap;
          if (march_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 4) {
          april_value += items[i].jaap;
          if (april_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 5) {
          may_value += items[i].jaap;
          if (may_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 6) {
          jun_value += items[i].jaap;
          if (jun_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 7) {
          july_value += items[i].jaap;
          if (july_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 8) {
          aug_value += items[i].jaap;
          if (aug_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 9) {
          sep_value += items[i].jaap;
          if (sep_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 10) {
          oct_value += items[i].jaap;
          if (oct_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 11) {
          nov_value += items[i].jaap;
          if (nov_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp',
              subHeader: 'बधाई हो, आपका संकल्प पूरा हुआ',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
        if (items[i].month === 12) {
          dec_value += items[i].jaap;
          if (dec_value >= this.sum && this.open_pop === 0) {
            console.log('OpenPop => ' + this.open_pop);
            const alert = await this.alertController.create({

              header: 'Congratulations, You have completed your sankalp <br>  बधाई हो, आपका संकल्प पूरा हुआ'  ,
              subHeader: '',
              message:
                // tslint:disable-next-line: max-line-length
                '',
              buttons: ['OK']
            });
            await alert.present();
            this.open_pop = 1;

          }
        }
      }


      // tslint:disable-next-line: prefer-for-of
      this.bars = new Chart(this.barChart.nativeElement, {
        type: 'bar',
        data: {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ],
          datasets: [
            {
              label: 'Jaap in thousands',
              data: [
                jan_value,
                feb_value,
                march_value,
                april_value,
                may_value,
                jun_value,
                july_value,
                aug_value,
                sep_value,
                nov_value,
                dec_value
              ],
              backgroundColor: 'rgb(255,147,64)', // array should have same number of elements as number of dataset
              borderColor: 'rgb(192,0,0)', // array should have same number of elements as number of dataset
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });



    });



  }
  resetMonth() {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    this.storage.getItems().then(items => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < items.length; i++) {
        if (currentMonth === items[i].month) {
          this.storage.deleteItems(items[i].month).then(val => {
            console.log('value removed =>' + val);
            this.getValue();
          });
        }
      }
    });
  }
  resetAll() {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    this.storage.getItems().then(items => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < items.length; i++) {
        if (currentMonth === items[i].month) {
          this.storage.deleteItems(items[i].month).then(val => {
            console.log('value removed =>' + val);
            this.getValue();
          });
        }
      }
    });
    // this.storage.getItems().then(items => {
    //   // tslint:disable-next-line: prefer-for-of
    //   for (let i = 0; i < items.length; i++) {
    //     this.storage.deleteAll().then(val => {
    //       this.getValue();
    //     });
    //   }
    // });
    // this.getValue();

  }
  async help() {
    const alert = await this.alertController.create({
      header: 'This feature helps to keep a track of your Total Jaap Count.',
      subHeader: '',
      message:
        // tslint:disable-next-line: max-line-length
        'You may enter the no. of jaap done in the day and click "OK" to save the value.<br><br>"RESET MONTH"- this will clear the data in the current month.<br><br>"RESET ALL"- this will clear data entries of all months at once.To set SANKALP- click on the Set Sankalp button and select "Set Sankalp" option. <br><br>Enter the sankalp number and click on "OK".<br><br>NOTE-Do not press the "RESET ALL" or "RESET MONTH" after setting the sankalp',
      buttons: ['OK']
    });
    await alert.present();
  }
  async setSankalpValue() {
    const alert = await this.alertController.create({
      header: 'Set Sankalp',
      inputs: [
        {
          name: 'name1',
          type: 'number',
          placeholder: 'Enter Sankalp'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (d: any) => {
            // const mobileRegister = {
            //   sankalp: d.name1
            // };

            this.storage.addSankalp(d.name1).then(item => {
              console.log('Sankal Value =>' + item);
              // this.sum = item;
              this.open_pop = 0;

              if (this.sum > item) {
                // console.log('OpenPop AGIAN=> ' + this.open_pop);
              }
              this.storage.getSankalp().then(val => {
                this.sum = val;

              });



            });
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
}