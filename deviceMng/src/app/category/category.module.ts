import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './categorylist.component';
import { NewcategoryComponent } from './newcategory.component';
import { DeletecategoryComponent } from './deletecategory.component';



@NgModule({
  declarations: [CategoryListComponent, NewcategoryComponent, DeletecategoryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryListComponent, NewcategoryComponent, DeletecategoryComponent
  ]
})
export class CategoryModule { }
