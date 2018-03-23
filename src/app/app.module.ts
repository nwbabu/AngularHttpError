import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from  '@angular/http';
import {DemoserviceService} from './demoservice.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [DemoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
