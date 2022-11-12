import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  uname = ''
  constructor() { }

  ngOnInit(): void {
  }
  changeUname() {
    console.log(`最新的名字为${this.uname}`);

  }
}
