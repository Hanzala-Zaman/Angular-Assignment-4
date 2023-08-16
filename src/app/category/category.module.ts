import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild
    ([
      {
         path: 'category',
         component: CategoryComponent
      }
    
    
  ])
  ]
})
export class CategoryModule { }
