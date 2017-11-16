import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Category, DataService } from "../data.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  newSubCategoryText = ''
  editing = false
  @Input()
  category: Category
  dataService: DataService
  constructor(dataService: DataService) {
    this.dataService = dataService
  }

  ngOnInit() {
  }
  addSubCategory(newSubCategoryText) {
    this.dataService.addSubCategory(newSubCategoryText, this.category)
    this.newSubCategoryText = ''
    this.editing = false
  }
}
