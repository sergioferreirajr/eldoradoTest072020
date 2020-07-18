import { Injectable } from '@angular/core';
import { Device } from '../device/device.model';
import { Category } from '../category/category.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ParametersService } from './parameters.service';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ep_getAllDevices = ParametersService.getEPGetAllDevices();
  ep_deleteDevice = ParametersService.getEPDeleteDevice();
  ep_newDevice = ParametersService.getEPNewDevice();
  ep_getAllCategories = ParametersService.getEPGetAllCategories();
  ep_getCategory = ParametersService.getEPGetCategory();
  ep_newCategory = ParametersService.getEPNewCategory();
  ep_deleteCategory = ParametersService.getEPDeleteCategory();

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Get all devices from database
   *
   * @returns Device[]
   */
  public getDevices(): Observable<any>  {
    let result = this.httpClient.get<Device[]>(this.ep_getAllDevices)
      .pipe(
        retry(2),
        catchError(this.handleError));
    return result;
  }

  /**
   * Add new Device
   * @param device
   */
  public newDevice(device: Device): Observable<Device>{
    return this.httpClient.post<Device>(this.ep_newDevice, JSON.stringify(device), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  /**
   * Delete a device using an ID
   */
  public deleteDevice(id: number) {
    return this.httpClient.delete<Device>(this.ep_deleteDevice + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  /**
   * Get all categories from database
   *
   * @returns Category[]
   */
  public getCategories(): Observable<Category[]>  {
    let result = this.httpClient.get<Category[]>(this.ep_getAllCategories)
      .pipe(
        retry(2),
        catchError(this.handleError));
    return result;
  }

  /**
   * Add new Category
   * @param Category
   */
  public newCategory(category: Category): Observable<Category>{
    return this.httpClient.post<Category>(this.ep_newCategory, JSON.stringify(category), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  /**
   * Delete a category using an ID
   */
  public deleteCategory(id: number) {
    return this.httpClient.delete<Category>(this.ep_deleteCategory + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  /**
   * Search Category by id
   * @param id Number
   */
  public getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.ep_getCategory + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  /**
   * Handle errors
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
