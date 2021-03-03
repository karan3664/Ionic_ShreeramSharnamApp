import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
export interface Item {
  id: Date;
  jaap: number;
  date: Date;
  month: number;
  year: number;
  sankalp: number;

}


export interface MobileDevice {
  imei: string;
  token: string;
}

const ITEM_KEYS = 'my-items';
const Mobile_KEYS = 'mobile_keys';
const DeviceToken = 'device_token';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) { }
  // saveJaapCount(jaap, date) {
  //   // this.storage.set('jaap', jaap);
  //   this.storage.set('jaap', {name : jaap, Date : date});
  // }
  // getJaapValue() {
  //  return this.storage.get('jaap').then(jaapval => {
  //     console.log('JAAP STORAGE VALUE =>' + jaapval);
  //     return jaapval;
  //   });
  // }
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEM_KEYS).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEM_KEYS, items);
      } else {
        return this.storage.set(ITEM_KEYS, [item]);
      }
    });
  }
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEM_KEYS);
  }
  deleteItems(month: number): Promise<Item> {
    return this.storage.get(ITEM_KEYS).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }
      const toKeep: Item[] = [];
      for (const i of items) {
        if (i.month !== month) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEM_KEYS, toKeep);
    });
  }
  deleteAll() {
    return this.storage.clear();
  }

  addSankalp(sankalp) {
    return this.storage.set('sankalp', sankalp);
  }
  getSankalp() {
    return this.storage.get('sankalp');
  }
  // saveIMEI(md: MobileDevice): Promise<any> {
  //   return this.storage.get(Mobile_KEYS).then((mobiledevice: MobileDevice[]) => {
  //     if (md) {
  //       mobiledevice.push(md);
  //       return this.storage.set(Mobile_KEYS, md);
  //     } else {
  //       return this.storage.set(Mobile_KEYS, [md]);
  //     }
  //   });
  // }

  saveIMEI(imei) {
    return this.storage.set(Mobile_KEYS, imei);

  }
  getIMEI() {
    return this.storage.get(Mobile_KEYS);
  }



  saveToken(token) {
    return this.storage.set(DeviceToken, token);
  }
  getToken() {
    return this.storage.get(DeviceToken);
  }
}