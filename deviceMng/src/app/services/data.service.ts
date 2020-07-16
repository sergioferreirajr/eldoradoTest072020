import { Injectable } from '@angular/core';
import { Device } from '../device/device.model';
import { Category } from '../category/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  /**
   * Get all devices from database
   *
   * @returns Device[]
   */
  public getDevices(): Device[]  {
    const devices = localStorage['devices'];
    return devices ? JSON.parse(devices): [];
  }

  /**
   * Add new Device
   * @param device
   */
  public newDevice(device: Device): void{
    const devices = this.getDevices();
    device.id = new Date().getTime();
    devices.push(device);
    localStorage['devices'] = JSON.stringify(devices);
  }

  /**
   * Delete a device using an ID
   */
  public deleteDevice(id: number): void {
    let devices: Device[] = this.getDevices();
    devices = devices.filter(device => device.id !== id);
    localStorage['devices'] = JSON.stringify(devices);
  }

  /**
   * Get all categories from database
   *
   * @returns Category[]
   */
  public getCategories(): Category[]  {
    const categories = localStorage['categories'];
    return categories ? JSON.parse(categories): [];
  }

  /**
   * Add new Category
   * @param Category
   */
  public newCategory(category: Category): void{
    const categories = this.getCategories();
    category.id = new Date().getTime();
    categories.push(category);
    localStorage['categories'] = JSON.stringify(categories);
  }

  /**
   * Delete a category using an ID
   */
  public deleteCategory(id: number): void {

    let devices: Device[] = this.getDevicesByCategoryId(id);
    for (var device of devices) {
      this.deleteDevice(device.id);
    }

    let categories: Category[] = this.getCategories();
    categories = categories.filter(category => category.id !== id);
    localStorage['categories'] = JSON.stringify(categories);
  }

  /**
   * Search Category by id
   * @param id Number
   */
  public getCategoryById(id: number): Category {
    const categories: Category[] = this.getCategories();
    return categories.find(category => category.id == id);
  }

  /**
   *
   * @param id Search devices by Category Id
   */
  private getDevicesByCategoryId(id: number): Device[]{
    let devices: Device[] = this.getDevices();
    devices = devices.filter(device => device.categoryId == id);
    return devices;
  }
}
