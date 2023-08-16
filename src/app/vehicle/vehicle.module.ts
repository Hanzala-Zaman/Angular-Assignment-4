import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from '../category/category.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild
    ([
       {
          path: '',
          component: ListComponent
       },
       {
        path: 'details/:id',
        component: DetailComponent
       },
       {
        path: 'category/:id',
        component: CategoryComponent
       },
       {
        path: 'category',
        component: CategoryComponent
       }
     
   ])
  ]
})
export class VehicleModule { }
