import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { vendedor,ciudad } from '../Models/seidor-models'

@Injectable({
  providedIn: 'root'
})
export class SeidorUtilService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://35.198.60.247:5000/";
  private vendedorUrl = "api/Vendedors/";
  private ciudadUrl = "api/Ciudads/";

  getCiudades(){
    return this.http.get(this.baseUrl + this.ciudadUrl);
  }

  getCiudad(id:number){
    return this.http.get(this.baseUrl + this.ciudadUrl+id);
  }

  postNewCiudad(res:any){    
    return this.http.post(this.baseUrl + this.ciudadUrl,res);
  }

  getVendedor(){
    return this.http.get(this.baseUrl + this.vendedorUrl);
  }

  getVendedorbyID(id:number){
    return this.http.get(this.baseUrl + this.vendedorUrl+id);
  }

  putUpdate(id:number,res:any){
    return this.http.put(this.baseUrl + this.vendedorUrl+id,res);
  }

  delDelete(id:number){
    return this.http.delete(this.baseUrl + this.vendedorUrl+id);
  }

  postNew(res:any){    
    return this.http.post(this.baseUrl + this.vendedorUrl,res);
  }

}
