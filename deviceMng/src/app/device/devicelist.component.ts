import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Device } from './device.model';
import { Category } from '../category/category.model';

@Component({
  selector: 'app-devicelist',
  templateUrl: './devicelist.component.html',
  styleUrls: ['./devicelist.component.css']
})
export class DeviceListComponent implements OnInit {

  devices: Device[] = [];
  categories: Category[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getDevices();
    this.getCategories();
  }

  private getDevices(){
    this.dataService.getDevices().subscribe((devs: Device[]) => {
      this.devices = devs;
    });
  }

  private getCategories(){
    this.dataService.getCategories().subscribe((cats: Category[]) => {
      this.categories = cats;
    });
  }

  getCategoryNameById(id: number): string {
    for (let i = 0; i < 3; i++) {
      let cat = this.categories[i];
      if (cat != undefined){
        if (cat.id == id){
          return cat.name;
        }
      }
    }
    return ""
  }

  deleteDevice($event: any, device: Device): void {
    $event.preventDefault();
    if (confirm('Do you confirm the deletion: Device = "' + device.id + '"?')) {
      this.dataService.deleteDevice(device.id).subscribe(()=>{
        this.getDevices();
      });
    }
  }
}
