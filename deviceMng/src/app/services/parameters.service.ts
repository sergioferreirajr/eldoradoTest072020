import { Injectable } from '@angular/core';
import * as propertiesFile from '../../../common/parameters.json';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor() { }

  /**
   * Get End Point for getAllDevices from parameters.json
   */
  public static getEPGetAllDevices(): any {
    return propertiesFile.ep_get_all_devices;
  }

  /**
   * Get End Point for deleteDevice from parameters.json
   */
  public static getEPDeleteDevice(): any {
    return propertiesFile.ep_delete_device;
  }

  /**
   * Get End Point for newDevice from parameters.json
   */
  public static getEPNewDevice(): any {
    return propertiesFile.ep_post_device;
  }

  /**
   * Get End Point for getAllCategories from parameters.json
   */
  public static getEPGetAllCategories(): any {
    return propertiesFile.ep_get_all_categories;
  }

  /**
   * Get End Point for getCategory by id from parameters.json
   */
  public static getEPGetCategory(): any {
    return propertiesFile.ep_get_category;
  }

  /**
   * Get End Point for getCategory from parameters.json
   */
  public static getEPNewCategory(): any {
    return propertiesFile.ep_post_category;
  }

  /**
   * Get End Point for deleteCategory by id from parameters.json
   */
  public static getEPDeleteCategory(): any {
    return propertiesFile.ep_delete_category;
  }
}
