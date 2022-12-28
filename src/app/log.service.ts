import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' //指当前的服务对象在"根模块中提供"，换句话说就是AppModule根模块提供,提供者
})  //所有服务对象都是"可被注入的"
export class LogService {  // 这个类是服务对象
    private language: string = '中文';
    doLog(action: any) {
        let uname = 'admin2';/* 人名 */
        let date = new Date().getTime()
        console.log(`人员:${uname},时间:${date},事件:${action}`);
    }
}
// 创建服务对象步骤
// 创建服务对象/实例，并指定服务提供者
// 在组件中声明依赖， 服务提供者就会自动注入进来，组件直接使用服务对象即可

/**
 * 创建一个Service
 * @Injectable({providedIn:'root'})
 * export class LogService {}
 */

/**
 * 组件使用
 * export class xxComponent {
 *  constructor(log:声明的服务类){
 *      此处的log会被注入为声明的服务类的实例
 * }
 * }
 */