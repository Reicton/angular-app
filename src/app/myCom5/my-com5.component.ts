import { Component } from '@angular/core';

@Component({
  selector: 'app-my-com5',
  templateUrl: './my-com5.component.html',
  styleUrls: ['./my-com5.component.css']
})
export class MyCom5Component {
  // MVVM Model模型数据
  uname = 'Recton';
  age = 25;
  obj = {
    name: '张三',
    age: 33,
    likes: ['打球', '听歌', '游泳']
  };
  apple = {
    price: 10,
    number: 1
  };
  descriptions = '这是一段文字说明';
  sayHello(params: string) {

  };
  modalName() {
    alert(this.uname)
  };
  increment() {
    this.apple.number++
  }
  decrement() {
    this.apple.number--
  }
}
