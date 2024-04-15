import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllvehiclesService {

  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"

  constructor(private _httpClient:HttpClient){ }

  getCars():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  } 
  
  getCar(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  getFilteredCars(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getPages(limit:number, pageNo:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageNo);
  }

  getLimit(limit:number, pageNo:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit="+limit+"&page="+pageNo);

  }

  getSorted(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }

  deleteApi(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }

createCar(data:any):Observable<any>{
  return this._httpClient.post(this.baseUrl,data);
}

editCar(id:any, data:any):Observable<any>{
  return this._httpClient.put(this.baseUrl+"/"+id, data);
}


}
