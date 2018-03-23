import { Injectable } from '@angular/core';
import {Http,Response}  from '@angular/http';
import{Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
@Injectable()
export class DemoserviceService {

  private _url:string="appdata/demo.json";
  constructor( private _http:Http) 
  {

   }
  getEmp()
  {
     return this._http.get(this._url)
     .map((respons:Response)=>respons.json())
     .catch(this.handleError);
  }
  handleError(error:Response)
  {
    console.error(error);
    return Observable.throw(error|| "server Error");
  }
}
