import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about_us/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'peerage',
    loadChildren: () => import('./pages/peerage/peerage.module').then( m => m.PeeragePageModule)
  },
  {
    path: 'prayer-center',
    loadChildren: () => import('./pages/prayercenter/prayer-center/prayer-center.module').then( m => m.PrayerCenterPageModule)
  },
  {
    path: 'sadhna-satsang',
    loadChildren: () => import('./pages/sadhna-satsang/sadhna-satsang.module').then( m => m.SadhnaSatsangPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'shree-amritvani',
    loadChildren: () => import('./pages/shree-amritvani/shree-amritvani.module').then( m => m.ShreeAmritvaniPageModule)
  },
  {
    path: 'bhajans',
    loadChildren: () => import('./pages/bhajans/bhajans.module').then( m => m.BhajansPageModule)
  },
  {
    path: 'dhuns',
    loadChildren: () => import('./pages/dhun/dhuns/dhuns.module').then( m => m.DhunsPageModule)
  },
  {
    path: 'pravachan',
    loadChildren: () => import('./pages/pravachan_folder/pravachan/pravachan.module').then( m => m.PravachanPageModule)
  },
  {
    path: 'e-books',
    loadChildren: () => import('./pages/e-books/e-books.module').then( m => m.EBooksPageModule)
  },
  {
    path: 'audio-from-granth',
    loadChildren: () => import('./pages/audiofromgranth/audio-from-granth/audio-from-granth.module').then( m => m.AudioFromGranthPageModule)
  },
  {
    path: 'news-letter',
    loadChildren: () => import('./pages/news-letter/news-letter.module').then( m => m.NewsLetterPageModule)
  },
  {
    path: 'jaap-count',
    loadChildren: () => import('./pages/jaap-count/jaap-count.module').then( m => m.JaapCountPageModule)
  },
  {
    path: 'poornima-jaap-countdays',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/poornima-jaap-countdays/poornima-jaap-countdays.module').then( m => m.PoornimaJaapCountdaysPageModule)
  },
  {
    path: 'naam-deeksha',
    loadChildren: () => import('./pages/naam-deeksha/naam-deeksha.module').then( m => m.NaamDeekshaPageModule)
  },
  {
    path: 'notifications/:price',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'peerage-one',
    loadChildren: () => import('./pages/peerage-one/peerage-one.module').then( m => m.PeerageOnePageModule)
  },
  {
    path: 'peerage-two',
    loadChildren: () => import('./pages/peerage-two/peerage-two.module').then( m => m.PeerageTwoPageModule)
  },
  {
    path: 'peerage-three',
    loadChildren: () => import('./pages/peerage-three/peerage-three.module').then( m => m.PeerageThreePageModule)
  },
  {
    path: 'joinfacebook',
    loadChildren: () => import('./pages/joinfacebook/joinfacebook.module').then( m => m.JoinfacebookPageModule)
  },
  {
    path: 'likefacebook',
    loadChildren: () => import('./pages/likefacebook/likefacebook.module').then( m => m.LikefacebookPageModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./pages/playlist/playlist.module').then( m => m.PlaylistPageModule)
  },
  {
    path: 'downloadlist',
    loadChildren: () => import('./pages/downloadlist/downloadlist.module').then( m => m.DownloadlistPageModule)
  },
  {
    path: 'pravachan-downloadlist',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/download_list/pravachan-downloadlist/pravachan-downloadlist.module').then( m => m.PravachanDownloadlistPageModule)
  },
  {
    path: 'dhuns-downloadlist',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/download_list/dhuns-downloadlist/dhuns-downloadlist.module').then( m => m.DhunsDownloadlistPageModule)
  },
  {
    path: 'bhajans-downloadlist',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/download_list/bhajans-downloadlist/bhajans-downloadlist.module').then( m => m.BhajansDownloadlistPageModule)
  },
  {
    path: 'audiogranth-downloadlist',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/download_list/audiogranth-downloadlist/audiogranth-downloadlist.module').then( m => m.AudiogranthDownloadlistPageModule)
  },
  {
    path: 'audiogranth-playlist',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/play_list/audiogranth-playlist/audiogranth-playlist.module').then( m => m.AudiogranthPlaylistPageModule)
  },
  {
    path: 'dhuns-playlist',
    loadChildren: () => import('./pages/play_list/dhuns-playlist/dhuns-playlist.module').then( m => m.DhunsPlaylistPageModule)
  },
  {
    path: 'bhajans-playlist',
    loadChildren: () => import('./pages/play_list/bhajans-playlist/bhajans-playlist.module').then( m => m.BhajansPlaylistPageModule)
  },
  {
    path: 'pravachan-playlist',
    loadChildren: () => import('./pages/play_list/pravachan-playlist/pravachan-playlist.module').then( m => m.PravachanPlaylistPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/play_list/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  {
    path: 'tabs-download',
    loadChildren: () => import('./pages/download_list/tabs-download/tabs-download.module').then( m => m.TabsDownloadPageModule)
  },
  {
    path: 'dhuns-player',
    loadChildren: () => import('./pages/play_list/dhuns-player/dhuns-player.module').then( m => m.DhunsPlayerPageModule)
  },
  {
    path: 'audio-player',
    loadChildren: () => import('./pages/play_list/audio-player/audio-player.module').then( m => m.AudioPlayerPageModule)
  },
  
 

  
  // {
  //   path: 'pravachan-ramayanji',
  //   loadChildren: () => import('./pages/play_list/pravachan-ramayanji/pravachan-ramayanji.module').then( m => m.PravachanRamayanjiPageModule)
  // },
  // {
  //   path: 'pravachan-cd',
  //   loadChildren: () => import('./pages/play_list/pravachan-cd/pravachan-cd.module').then( m => m.PravachanCDPageModule)
  // }
  // ,
  // {
  //   path: 'videoplayer/:url',
  //   loadChildren: () => import('./pages/videoplayer/videoplayer.module').then( m => m.VideoplayerPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
