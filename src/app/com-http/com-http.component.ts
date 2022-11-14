import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'com-http',
  templateUrl: './com-http.component.html',
  styleUrls: ['./com-http.component.css'],
})
export class ComHttpComponent implements OnInit {

  constructor(private http: HttpClient) { }  //将HttpClient实例注入进组件发送异步请求

  ngOnInit(): void {
  }
  loadStudentsData() {
    let url = 'https://www.codeboy.com/xuezi/data/product/list.php?pno=1';
    this.http.get(url).subscribe(res => {
      console.log(res);
    })
  }
}

