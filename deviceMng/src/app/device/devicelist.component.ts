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

  devices: Device[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.devices = this.getDevices();
  }

  getDevices(): Device[]{
    return this.dataService.getDevices();
  }

  getCategoryNameById(id: number): string {
    const category: Category = this.dataService.getCategoryById(id);
    return category.name;
  }

  deleteDevice($event: any, device: Device): void {
    $event.preventDefault();
    if (confirm('Do you confirm the deletion: Device = "' + device.id + '"?')) {
      this.dataService.deleteDevice(device.id);
      this.devices = this.dataService.getDevices();
    }
  }
}
