import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input()
  /**
   * 装饰器表示输入型属性，表示属性可以被父组件传值
   */
  contackName: any = null
  constructor() { }
  ngOnInit(): void {
  }

}
