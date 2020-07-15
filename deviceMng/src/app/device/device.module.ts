import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './devicelist.component';
import { NewdeviceComponent } from './newdevice.component';
import { DeletedeviceComponent } from './deletedevice.component';



@NgModule({
  declarations: [DeviceListComponent, NewdeviceComponent, DeletedeviceComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DeviceListComponent, NewdeviceComponent, DeletedeviceComponent
  ]
})
export class DeviceModule { }
