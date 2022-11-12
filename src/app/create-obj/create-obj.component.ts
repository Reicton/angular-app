import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'create-obj',
  templateUrl: './create-obj.component.html',
  styleUrls: ['./create-obj.component.css']
})
export class CreateObjComponent implements OnInit {
  //组件服务使用者，必须声明依赖
  constructor( private log: LogService) { //声明依赖
  }

  ngOnInit(): void {
  }
  doAdd() {
    let action = '正在添加商品'
    this.log.doLog(action)
  }
  doDelete() {
    let action = '正在删除商品'
    this.log.doLog(action)
  }
}
