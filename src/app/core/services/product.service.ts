import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _htt:HttpClient) { }

  getAllProducts(){
    return this._htt.get(`https://dev.to/api/articles`)
  }
}
