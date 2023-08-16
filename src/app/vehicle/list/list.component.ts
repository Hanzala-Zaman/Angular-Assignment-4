import { Component } from '@angular/core';
import { VehicleService } from 'src/app/vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent 
{
 

      constructor (public showList:  VehicleService ) 
      {
        }
      ngOnInit()
      {

      }
       
      getDetails (index: any)
      {
         this.showList.index = index;
      }
    

      getcatList(index: any)
    {
      this.showList.category.index = index;
    }
   

     
}
