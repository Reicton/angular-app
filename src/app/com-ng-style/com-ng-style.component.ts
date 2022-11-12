import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style',
  templateUrl: './com-ng-style.component.html',
  styleUrls: ['./com-ng-style.component.css']
})
export class ComNgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  styleObj = {
    backgroundColor: 'pink',
    color: 'white',
    cursor: 'pointer',
    width: '100px',
    height: '50px',
    lineHeight: '50px'
  }
  classObj = {
    btn: true,
    'btn-success': false,
    'btn-danger': false
  }
  changeStyle() {
    this.styleObj.backgroundColor = 'yellowgreen'
  }
  getSuccess() {
    this.classObj['btn-success'] = true
    this.classObj['btn-danger'] = false

  }
  getDanger() {
    this.classObj['btn-danger'] = true
    this.classObj['btn-success'] = false
  }
}
