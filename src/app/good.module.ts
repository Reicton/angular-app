import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { myCom1 } from './myCom1/myCom1';
import { myCom2 } from './myCom2/mycom2.component';
import { myCom3 } from './myCom3/mycom3.component';
import { Mycom4Component } from './myCom4/mycom4.component';
import { MyCom5Component } from './myCom5/my-com5.component';
import { MyComNgForComponent } from './my-com-ng-for/my-com-ng-for.component';
import { MycomNgIfComponent } from './mycom-ng-if/mycom-ng-if.component';
import { ComNgifComponent } from './com-ngif/com-ngif.component';
import { ComNgStyleComponent } from './com-ng-style/com-ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgModelForTestComponent } from './ng-model-for-test/ng-model-for-test.component';
import { ComTodoListComponent } from './com-todo-list/com-todo-list.component';
import { ComTableListComponent } from './com-table-list/com-table-list.component';
// 导入管道模块
import { zzmmPie } from './allPipes/zzmm.pipe';
import { moneyPipe } from './allPipes/money.pipe';
// 导入自定义模块
import { XuYaoQiangDiaoDirective } from './xu-yao-qiang-diao.directive';
import { CreateObjComponent } from './create-obj/create-obj.component';
import { sexPipe } from './allPipes/sex.pipe';
import { GoodTestComponent } from './good-test/good-test.component';


@NgModule({
  declarations: [  //宣言、宣称、声明的意思
    AppComponent,  //注册第一个组件
    myCom2,  //注册第二个组件
    myCom1,
    myCom3,
    Mycom4Component,
    MyCom5Component,
    MyComNgForComponent,
    MycomNgIfComponent,
    ComNgifComponent,
    ComNgStyleComponent,
    NgSwitchComponent,
    NgModelComponent,
    NgModelForTestComponent,
    XuYaoQiangDiaoDirective,
    ComTodoListComponent,
    ComTableListComponent,
    sexPipe,
    zzmmPie,
    moneyPipe,
    CreateObjComponent,
    GoodTestComponent 
  ],
  imports: [
    BrowserModule,  //浏览器模块，包含了CommonModule,不包含FormsModule
    AppRoutingModule, //路由模块
    FormsModule //表单模块
  ],
  providers: [],

})
export class AppModule { }
