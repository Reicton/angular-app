import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngmodel-for-test',
  templateUrl: './ng-model-for-test.component.html',
  styleUrls: ['./ng-model-for-test.component.css']
})
export class NgModelForTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputName = '';
  unameList = [
    'Bob',
    'Rick',
    'Lily',
    'Mark',
    'Henry',
    'Mike',
    'James'
  ];

  message = '用户名长度需要在3-9位';

  showMessage() {
    const num = this.inputName.length
    if (num >= 0 && num <= 3) {
      this.message = '用户名长度过短'
    } else if (num > 9) {
      this.message = '用户名长度过长'
    } else if (num >= 3 && num <= 9) {
      if (this.unameList.some(item => item === this.inputName)) {
        this.message = '用户名已经被注册'
      } else {
        this.message = '用户名可使用'
      }
    }
  }
}
