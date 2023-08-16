import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/app/vehicle.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent 
{
  id : any; 

  constructor (public showDetails:  VehicleService, private activatedroute:ActivatedRoute) 
      {
          activatedroute.paramMap.subscribe(
            (data) => {
              this.id =data.get('id')
              console.log(this.id);
            }
          )
      }
 
  }


