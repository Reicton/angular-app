import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  inputName: string = ''

  // 想要给父组件传值，需要使用事件发射器
  // 输入属性是@Input,输出是Output
  @Output()
  someEvent: any = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  changeInputName() {
    // this.changeName(this.inputName)
    console.log(this.inputName);
    // 此时子组件想要把自己的inputName传递给父组件
    this.someEvent.emit(this.inputName)
    this.inputName = ''
  }
}
