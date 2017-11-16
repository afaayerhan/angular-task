import { Component } from '@angular/core';
import { Category, DataService } from './data.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  categoryStore: DataService
  newCategoryText = ''
  editing = false 
  constructor(categoryStore: DataService){
    this.categoryStore = categoryStore
  }
  
  addCategory (value) {
    this.categoryStore.addCategory(value)
    this.newCategoryText = ''
    this.editing = false
  }
  toggleEditing () {
    this.editing = !this.editing
  }
}
