import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  public photos:any=[];
   

  constructor(private _photosService:PhotosService){

    _photosService.getPhotos().subscribe(
      (getData)=>{
        this.photos=getData
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )    
    
  }
   
  

}
