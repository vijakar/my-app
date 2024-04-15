import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllvehiclesService } from '../allvehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-all-vehicles',
  templateUrl: './create-all-vehicles.component.html',
  styleUrls: ['./create-all-vehicles.component.css']
})
export class CreateAllVehiclesComponent {

public id:any=''

  constructor(private _allvehiclesService :AllvehiclesService, private _activatedRoute:ActivatedRoute){
_activatedRoute.params.subscribe(
  (data:any)=>{
    this.id= data.id;
    if(this.id){
      _allvehiclesService.getCar(this.id).subscribe(
        (data:any)=>{
          this.carForm.patchValue(data)
        }
      )
    }
  }
)
  }

  public carForm:FormGroup=new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model:new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl()
    }
)


submit(){

if(this.id){
  this._allvehiclesService.editCar(this.id, this.carForm.value).subscribe(
    (data:any)=>{
      alert("Edited successfully");
      this.carForm.reset();
    },(err:any)=>{
      alert("Edited failed");
    }
  )

}else{
  this._allvehiclesService.createCar(this.carForm.value).subscribe(
    (data:any)=>{
      alert("created succesfully")
      this.carForm.reset();
    },
    (err:any)=>{
      alert("creation failed")
    }
    )
    
}



}

}
