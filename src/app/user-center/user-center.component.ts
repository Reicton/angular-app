import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css']
})
export class UserCenterComponent implements OnInit {
  public visible: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  open(): void {
    this.visible = true
  }
  close(): void {
    this.visible = false
  }
}
