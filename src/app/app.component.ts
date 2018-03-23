import { Component,OnInit } from '@angular/core';
import { DemoserviceService } from './demoservice.service';
import {Http}from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  employee:Array<string>;
  errormessage:string;
  constructor(private _demoservice:DemoserviceService)
  {

  }
  ngOnInit()
  {
    this._demoservice.getEmp()
    .subscribe(resEmployeedata=>this.employee=resEmployeedata,
    resEmpError=>this.errormessage=resEmpError );

  }
}
