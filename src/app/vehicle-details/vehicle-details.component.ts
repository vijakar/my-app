import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllvehiclesService } from '../allvehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {

public id:any='';
public car:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _allvehiclesService:AllvehiclesService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;

        -_allvehiclesService.getCar(this.id).subscribe(
          (data:any)=>{
            this.car=data;
          },(err:any)=>{
            alert("internal server error")
          }
        )
      
      }
    )
  }
}
