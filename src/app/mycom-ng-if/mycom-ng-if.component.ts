import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mycom-ngIf',
  templateUrl: './mycom-ng-if.component.html',
  styleUrls: ['./mycom-ng-if.component.css']
})
export class MycomNgIfComponent implements OnInit {
  isVip = true  //判断当前用户是否为付费用户
  constructor() { }

  ngOnInit(): void {
  }
  cancleVip() {
    this.isVip = !this.isVip
  }
}
