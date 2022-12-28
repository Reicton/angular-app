import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-com5',
  templateUrl: './my-com5.component.html',
  styleUrls: ['./my-com5.component.css']
})
export class MyCom5Component implements OnInit {
  listOfData: any[] = [];
  zifu='';
  public siyou: string[] = ['黄瓜', '西红柿', '菠菜'];
  listOfParentData :any= [];
  listOfChildrenData:any = [];
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
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfParentData.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
        expand: false
      });
    }
    for (let i = 0; i < 3; ++i) {
      this.listOfChildrenData.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      });
    }
  }
}
