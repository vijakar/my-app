import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../bottomsheet/bottomsheet.component';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  hidden = false;
  constructor(private _bottomSheet:MatBottomSheet){}
 
  openBottomSheet():void{
    this._bottomSheet.open(BottomsheetComponent)
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
