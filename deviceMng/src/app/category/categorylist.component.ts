import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(){
    this.dataService.getCategories().subscribe((cats: Category[])=>{
      this.categories = cats;
    });
  }

  deleteCategory($event: any, category: Category): void {
    $event.preventDefault();
    if (confirm('ATTENTION. This action can deletes all Devices related to this Category. Do you confirm the deletion: Category = "' + category.id + '"?')) {
      this.dataService.deleteCategory(category.id).subscribe(()=>{
        this.getCategories();
      });
    }
  }
}
