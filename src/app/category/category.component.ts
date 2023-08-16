import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  id : any; 
  filterCategory: any;
  
  constructor(public showCategory: VehicleService, private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id'); 
    });
    
  } 
 
}
