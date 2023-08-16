import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  [x: string]: undefined;
  
   category: any =[
    {
      id: 1,
       name: "SUV"
    },
    {
      id: 2,
      name: "Minivan"
   },
   {
    id: 3,
    name: "Sedan"
   },
   {
    id: 4,
    name: "Sports"
   },

  ]
  detail: any =[];

  constructor() { }

  vehicle: any = [
    {
      id: 1,
      category: 'SUV',
      categoryId: 1,
      name: 'Kia Sorento',
      fuelType: 'Gasoline/Diesel',
      color: 'black',
      model: 2019
    },
    {
      id: 2,
      category: 'Sports',
      categoryId: 4,
      name: 'Nissan GTR-R35',
      fuelType: 'Diesel',
      color: 'blue',
      model: 2020
    },
    {
      id: 3,
      category: 'SUV',
      categoryId: 1,
      name: 'Porsche Ceyenne',
      fuelType: 'Gasoline/Diesel',
      color: 'silver',
      model: 2023
    },
    {
      id: 4,
      category: 'Sedan',
      name: 'Audi A6',
      categoryId: 3,
      fuelType: 'Diesel',
      color: 'red',
      model: 2014
    },
    {
      id: 5,
      category: 'Sedan',
      categoryId: 3,
      name: 'Honda Civic',
      fuelType: 'Diesel',
      color: 'grey',
      model: 2021
    },
    {
      id: 6,
      category: 'Sedan',
      name: 'BMW 3 Series',
      fuelType: 'Gasoline/Diesel',
      color: 'blue',
      model: 2018
    },
    {
      id: 7,
      category: 'Minivan',
      categoryId: 2,
      name: 'Honda Odyssey',
      fuelType: 'Gasoline/Diesel',
      color: 'black',
      model: 2009
    },
    {
      id: 8,
      category: 'Minivan',
      categoryId: 2,
      name: 'Every',
      fuelType: 'Petrol',
      color: 'black',
      model: 2001
    }
    ]
    index:any = null;
   
    // getDetails(id: number) {
    //   return this.vehicle.find(vehicle => vehicle.id === id);
    // }
  
    // fetchIndex(id: number) {
    //   const foundIndex = this.vehicle.findIndex(vehicle => vehicle.id === id);
    //   if (foundIndex !== -1) {
    //     this.index = foundIndex;
    //   }
    // }
}

