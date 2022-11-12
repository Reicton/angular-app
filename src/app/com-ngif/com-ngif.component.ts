import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'com-ngif',
  templateUrl: './com-ngif.component.html',
  styleUrls: ['./com-ngif.component.css']
})
export class ComNgifComponent implements OnInit {
  loadMore = true
  constructor() { }

  ngOnInit(): void {
  }
  noMore() {
    this.loadMore = false
  }
}
