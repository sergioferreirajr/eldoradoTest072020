import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './categorylist.component';
import { NewcategoryComponent } from './newcategory.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CategoryListComponent, NewcategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CategoryListComponent, NewcategoryComponent
  ]
})
export class CategoryModule { }
