import { Component } from "@angular/core"

/**
 *创建一个自定义组件
 */
// 组件=模板+脚本+样式
// 装饰器(Decorator)---用于指定class的用途
@Component({
    selector: 'com1',
    template: '<h2>自定义第一个组件</h2><hr/>'
})
export class myCom1 {

}