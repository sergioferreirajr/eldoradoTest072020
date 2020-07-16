import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './devicelist.component';
import { NewdeviceComponent } from './newdevice.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeviceListComponent, NewdeviceComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DeviceListComponent, NewdeviceComponent
  ]
})
export class DeviceModule { }
