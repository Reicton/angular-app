import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ComHttpComponent } from './com-http/com-http.component';

// 导入HTTP服务模块
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component'
import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserMoneyComponent } from './user-money/user-money.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { LoginGuard } from './login.guard';
import { TimeGuard } from './time.guard';

// UI组件模块
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableUiComponent } from './table-ui/table-ui.component';


// 生命路由词典-路由地址和路由组件对应的集合
const routes: Route[] = [
  //路由重定向
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // 正常路由
  { path: 'home', component: ParentComponent },
  { path: 'todo-list', component: ComTodoListComponent },
  { path: 'table-list', component: ComTableListComponent },
  // 路由首位(Guard)
  {
    path: 'user-center',
    component: UserCenterComponent,
    canActivate: [LoginGuard, TimeGuard],
    // 二级嵌套路由
    children: [
      {
        path: '', component: UserIndexComponent
      },
      {
        path: 'index', component: UserIndexComponent
      },
      {
        path: 'money', component: UserMoneyComponent
      },
      {
        path: 'order', component: UserOrderComponent
      },
    ]
  },
  // 动态路由
  { path: 'detail/:id', component: DetailComponent },
  // 通用路由,注意放到最后
  { path: '**', component: NotFoundComponent }
]
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
    GoodTestComponent,
    ComHttpComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    NotFoundComponent,
    DetailComponent,
    UserCenterComponent,
    UserIndexComponent,
    UserMoneyComponent,
    UserOrderComponent,
    TableUiComponent
  ],
  imports: [
    BrowserModule,  //浏览器模块，包含了CommonModule,不包含FormsModule
    FormsModule, //表单模块,
    HttpClientModule,  //提供http服务模模块
    RouterModule.forRoot(routes), //注册路由词典
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent] //初始化引导组件
})
export class AppModule { }
