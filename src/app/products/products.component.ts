import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

public term:string="";
public isEdit:boolean=false;
public i:number=0;

  public products:any=[
    { name:"pen", price:20, rating:3, freedelivery:true},
    { name:"phone", price:100, rating:2, freedelivery:false},
    { name:"shirt", price:400, rating:4, freedelivery:true},
    { name:"cap", price:200, rating:5, freedelivery:false},
    { name:"mobile case", price:300, rating:2, freedelivery:true},
    { name:"remote", price:400, rating:2.5, freedelivery:false}
  ]


  filter(){
    this.products  = this.products.filter((product:any)=>product.name.includes(this.term));
  }

  freedelivery(){
    this.products = this.products.filter((product:any)=>product.freedelivery==true)
  }
  low(){
    this.products = this.products.sort((a:any,b:any)=>a.price-b.price);
  }

  high(){
    this.products = this.products.sort((a:any,b:any)=>b.price-a.price);
  }

  ratinglow(){
    this.products=this.products.sort((a:any, b:any)=>a.rating-b.rating);
  }
  ratinghigh(){
    this.products=this.products.sort((a:any, b:any)=>b.rating-a.rating);
  }
  discount(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price/2
      return product
    })

  }
  delivery(){
    this.products = this.products.map((product:any)=>{
      product.price+=50;
      return product;
    });
  }
  sum(){
    var total = this.products.reduce((sum:any, product:any)=>sum+product.price,0)
  alert(total)
  }
  cart(){
    var len = this.products.length;
    alert(len)
  }
delete(i:number){
  this.products.splice(i,1);
}
public product:any={
  name:'',
  price:'',
  rating:'',
  freedelivery:false
}
addProduct(){
  this.products.push({...this.product})
  alert("created successfully")
  this.product.name="";
  this.product.price="";
  this.product.rating="";
  this.product.freedelivery=false;
}
update(selectedProduct:any, i:number){
  this.isEdit = true; 
  this.i=i;
this.product = {...selectedProduct};
}
edit(){
  this.products.splice(this.i,1,{...this.product})
}
}

