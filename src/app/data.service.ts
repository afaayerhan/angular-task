import { Injectable } from '@angular/core';
export class SubCategory {
  title: string
  constructor(title) {
    this.title = title
  }
}
export class Category {
  title: string
  subCategories: Array<SubCategory> = []
  constructor(title: string, subcategory?: SubCategory[]) {
    this.title = title.trim()
  }
  __addSubCategory(title: string) {
    if (title === '') {
      return;
    }
    this.subCategories.push(new SubCategory(title))
  }
  __removeSubCategory(subCategory: SubCategory) {
    this.subCategories.splice(this.subCategories.indexOf(subCategory), 1)
  }
}
@Injectable()
export class DataService {
  categories: Array<Category>
  constructor() {
    const storedData = localStorage.getItem('categoryData') || '[]'
    const parsedData = JSON.parse(storedData)
    console.log(parsedData)
    this.categories = parsedData.map(category => {
      const createdCategory = new Category(category.title)
      createdCategory.subCategories = category.subCategories.map(subcategoryData => {
        return new SubCategory(subcategoryData.title)
      })
      return createdCategory
    })

  }
  updateLocalStorage() {
    console.log(this.categories)

    localStorage.setItem('categoryData', JSON.stringify(this.categories))
  }
  addCategory(title: string) {
    if (title === '') {
      return;
    }
    this.categories.push(new Category(title))
    this.updateLocalStorage()
  }
  removeCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1)
  }

  // subcategory
  addSubCategory(title: string, category) {
    if (title === '') {
      return;
    }
    const foundCategory = this.categories[this.categories.indexOf(category)]
    foundCategory.subCategories.push(new SubCategory(title))
    this.updateLocalStorage()
  }

  removeSubCategory(subCategory: SubCategory, category) {
    const foundCategory = this.categories[this.categories.indexOf(category)]
    foundCategory.subCategories.splice(foundCategory.subCategories.indexOf(subCategory), 1)
    this.updateLocalStorage()
  }
}
