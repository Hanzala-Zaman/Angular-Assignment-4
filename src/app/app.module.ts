import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot
    ([
       {
          path: '',
          loadChildren: () => import('./vehicle/vehicle.module')
          .then(mod => mod.VehicleModule)
       },
       {
        path: 'list',
        loadChildren: () => import('./vehicle/vehicle.module')
        .then(mod => mod.VehicleModule)
     },
       {
        path: 'details',
        loadChildren: () => import('./vehicle/vehicle.module')
        .then(mod => mod.VehicleModule)
     },
     {
      path: 'category',
      loadChildren: () => import('./category/category.module')
      .then(mod => mod.CategoryModule)
   }
     
   ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
