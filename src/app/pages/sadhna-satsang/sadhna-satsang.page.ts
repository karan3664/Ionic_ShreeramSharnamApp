import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-sadhna-satsang',
  templateUrl: './sadhna-satsang.page.html',
  styleUrls: ['./sadhna-satsang.page.scss']
})
export class SadhnaSatsangPage implements OnInit {
  SadnaSatsang: any;
  constructor(private authService: AuthService,private loader: LoaderService){}

  ngOnInit() {
    this.getSadhnaSatsang();
  }
  getSadhnaSatsang() {
    this.loader.loadingPresent();
    const data = {
      json_name: 'sadhna.json'
    };
    this.authService.GetJsonData(data).subscribe(
      (res: any) => {
        console.log(res);
        this.SadnaSatsang = res;
        this.loader.loadingDismiss();
      },
      (error: any) => {
        console.log('error');
      }
    );
  }
  openWeb(message) {
    window.open(message, '_blank')
    console.log(message);
  }
}
