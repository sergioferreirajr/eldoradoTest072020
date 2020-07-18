import { Component, OnInit, ViewChild } from '@angular/core';
import { Device } from './device.model';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category/category.model';

@Component({
  selector: 'app-newdevice',
  templateUrl: './newdevice.component.html',
  styleUrls: ['./newdevice.component.css']
})
export class NewdeviceComponent implements OnInit {

  @ViewChild('formDevice', {static: true}) formDevice: NgForm;
  device: Device;
  categories: Category[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.device = new Device();
    this.getCategories();
  }

  newDevice(): void {
    if(this.formDevice.form.valid){
      this.dataService.newDevice(this.device).subscribe(() => {
        this.router.navigate(["/devices"]);
      });
    }
  }

  getCategories(): void{
    this.dataService.getCategories().subscribe((cats: Category[]) => {
      this.categories = cats;
    });
  }
}
