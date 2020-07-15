import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device/devicelist.component';
import { CategoryListComponent } from './category/categorylist.component';
import { HomeComponent } from './home/home.component';
import { NewdeviceComponent } from './device/newdevice.component';
import { DeletedeviceComponent } from './device/deletedevice.component';
import { NewcategoryComponent } from './category/newcategory.component';
import { DeletecategoryComponent } from './category/deletecategory.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'devicelist',
    component: DeviceListComponent
  },
  {
    path:'deletedevice',
    component: DeletedeviceComponent
  },
  {
    path:'newdevice',
    component: NewdeviceComponent
  },
  {
    path:'categorylist',
    component: CategoryListComponent
  },
  {
    path:'newcategory',
    component: NewcategoryComponent
  },
  {
    path:'deletecategory',
    component: DeletecategoryComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
