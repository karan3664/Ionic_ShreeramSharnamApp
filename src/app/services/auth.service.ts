import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  DhunAudio(postData): Observable<any> {
    return this.httpService.post('dhun_audio.json', postData);
  }

  DhunVideo(postData): Observable<any> {
    return this.httpService.post('dhun_video.json', postData);
  }

  ShreeAmritvani(postdata): Observable<any> {
    return this.httpService.post('amritvani.json', postdata);
  }

  SadhnaSatsang(postdata): Observable<any> {
    return this.httpService.post('sadhna.json', postdata);
  }
  PravachanCassete(postdata): Observable<any> {
    return this.httpService.post('pravachan_cassete.json', postdata);
  }
  PravachanRam(postdata): Observable<any> {
    return this.httpService.post('pravachan_ram.json', postdata);
  }
  PravachanAudio(postdata): Observable<any> {
    return this.httpService.post('pravachan_audio.json', postdata);
  }
  PravachanVideo(postdata): Observable<any> {
    return this.httpService.post('pravachan_video.json', postdata);
  }
  Bhajans(postdata): Observable<any> {
    return this.httpService.post('bhajans.json', postdata);
  }
  Bhaktiprakash(postdata): Observable<any> {
    return this.httpService.post('bhaktiprakash.json', postdata);
  }
  Ramayansar(postdata): Observable<any> {
    return this.httpService.post('ramayansar.json', postdata);
  }
  Books(postdata): Observable<any> {
    return this.httpService.post('books.json', postdata);
  }
  PrayerCenter(postdata): Observable<any> {
    return this.httpService.post('prayer_centre.json', postdata);
  }
  PrayerOther(postdata): Observable<any> {
    return this.httpService.post('prayer_other.json', postdata);
  }
  Gallery(postdata): Observable<any> {
    return this.httpService.post('wallpaper.json', postdata);
  }
  NewsLetter(postdata): Observable<any> {
    return this.httpService.post('newsletter.json', postdata);
  }
  SavePlayList(postdata): Observable<any> {
    return this.httpService.post('save_play_list.php', postdata);
  }
  SaveDownloadList(postdata): Observable<any> {
    return this.httpService.post('save_download_list.php', postdata);
  }
  GetJsonData(postdata): Observable<any> {
    return this.httpService.post('GetJSONData.php', postdata);
  }
  GetPlayList(postdata): Observable<any> {
    return this.httpService.post('get_play_list.php', postdata);
  }

  GetDownloadList(postdata): Observable<any> {
    return this.httpService.post('get_download_list.php', postdata);
  }

  DeletePlayList(postdata): Observable<any> {
    return this.httpService.post('delete_play_list.php', postdata);
  }

  DeleteDownloadList(postdata): Observable<any> {
    return this.httpService.post('delete_download_list.php', postdata);
  }
  AddDeviceToken(postdata): Observable<any> {
    return this.httpService.post('AddDeviceToken.php', postdata);
  }

  GetAllNotificaton(postdata): Observable<any> {
    return this.httpService.post('get_all_notification.php', postdata);
  }
}
