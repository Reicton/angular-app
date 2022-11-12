import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'table-list',
  templateUrl: './com-table-list.component.html',
  styleUrls: ['./com-table-list.component.css']
})
export class ComTableListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emList = [

    {
      sname: '张三', sex: 1, birthday: 0, salary: 5000568, zzmm: 10
    },

    {
      sname: '李四', sex: 0, birthday: 1000, salary: 1126000, zzmm: 20
    },

    {
      sname: '王五', sex: 1, birthday: 1000 * 3600 * 24, salary: 7051, zzmm: 30
    },

    {
      sname: '李丽', sex: 0, birthday: 1000 * 3600 * 24 * 365, salary: 8098.25288, zzmm: 40
    },
  ]
  removeEm(value: string) {
    this.emList = this.emList.filter(item => item.sname != value)
  }
}
