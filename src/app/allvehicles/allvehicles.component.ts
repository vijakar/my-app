import { Component } from '@angular/core';
import { AllvehiclesService } from '../allvehicles.service';

@Component({
  selector: 'app-allvehicles',
  templateUrl: './allvehicles.component.html',
  styleUrls: ['./allvehicles.component.css']
})
export class AllvehiclesComponent {

  public term:string=''
  public pagesNo:number=0;
  public limit:number=0;
  public column:string="";
  public order:string="";

public cars:any=[];

constructor(private _allvehiclesService:AllvehiclesService){

  _allvehiclesService.getCars().subscribe(
    (data:any)=>{
      this.cars = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
  
}

filterCars(){
  this._allvehiclesService.getFilteredCars(this.term).subscribe(
    (data:any)=>{
      this.cars =data;
    }, 
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
filteredPages(){
  this._allvehiclesService.getPages(this.limit, this.pagesNo).subscribe(
    (data:any)=>{
      this.cars = data;
    },(error:any)=>{
      alert("Internal server error")
    }
  )
}

sorted(){
  this._allvehiclesService.getSorted(this.column, this.order).subscribe(
    (data:any)=>{
      this.cars = data;
    }, (err:any)=>{
      alert("Internal server error")
    }
  )
}

deleteCar(id:string){
this._allvehiclesService.deleteApi(id).subscribe(
(data:any)=>{
  alert("deleted successfully")
  location.reload();
},(err:any)=>{
  alert("Internal server error")
}
)
}

}
