import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../category/category.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {

  @ViewChild('formCategory', {static: true}) formCategory: NgForm;
  category: Category;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.category = new Category();
  }

  newCategory(): void {
    if(this.formCategory.form.valid){
      this.dataService.newCategory(this.category);
      this.router.navigate(["/categories"]);
    }
  }
}
