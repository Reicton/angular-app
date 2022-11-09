import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myCom1 } from './myCom1/myCom1';
import { myCom2 } from './myCom2/mycom2.component';
import { myCom3 } from './myCom3/mycom3.component';
import { Mycom4Component } from './myCom4/mycom4.component';
import { MyCom5Component } from './myCom5/my-com5.component';

@NgModule({
  declarations: [  //宣言、宣称、声明的意思
    AppComponent,  //注册第一个组件
    myCom2,  //注册第二个组件
    myCom1,
    myCom3,
    Mycom4Component,
    MyCom5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
