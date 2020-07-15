import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../device/device.model';
import { Category } from '../category/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly deviceValues = [
    [1,1,'blue','1'],
    [2,1,'red','2'],
    [3,2,'green','3']
  ];

  readonly categoryValues = [
    [1,'category 1'],
    [2,'category 2'],
    [3,'category 3']
  ];

  constructor() { }

  /**
   * Get all devices from database
   *
   * @returns Observable<any>
   */
  public getDevices(): Observable<any>  {
    return new Observable(obs => {
      obs.next(this.deviceValues);
      obs.complete();
    });
  }

  /**
   * Get all categories from database
   *
   * @returns Observable<any>
   */
  public getCategories(): Observable<any>  {
    return new Observable(obs => {
      obs.next(this.categoryValues);
      obs.complete();
    });
  }
}
