import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './device/devicelist.component';
import { CategoryListComponent } from './category/categorylist.component';
import { HomeComponent } from './home/home.component';
import { NewdeviceComponent } from './device/newdevice.component';
import { NewcategoryComponent } from './category/newcategory.component';
import { AuthorComponent } from './author/author.component';

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
    path:'devices',
    component: DeviceListComponent
  },
  {
    path:'devices/newdevice',
    component: NewdeviceComponent
  },
  {
    path:'categories',
    component: CategoryListComponent
  },
  {
    path:'categories/newcategory',
    component: NewcategoryComponent
  },
  {
    path:'author',
    component: AuthorComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule {}
