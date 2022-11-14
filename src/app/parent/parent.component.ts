import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  uname: string = '任镜霖'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeName(params: string) {
    this.uname = params
  }
  jump() {
    this.router.navigateByUrl('/table-list')
  }
  jump1(num: number) {
    this.router.navigate([`/detail/${num}`], { queryParams: { id: num, name: '张三' } })
  }
}
