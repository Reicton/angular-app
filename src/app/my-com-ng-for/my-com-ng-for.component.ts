import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mycom-ngFor',
  templateUrl: './my-com-ng-for.component.html',
  styleUrls: ['./my-com-ng-for.component.css']
})
export class MyComNgForComponent implements OnInit {
  personList = ['张三', '李四', '王五', '李丽']
  constructor() { }

  ngOnInit(): void {
  }

}
