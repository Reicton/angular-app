import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface User {
  id: number,
  name: string
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public goodNumber: number = 0
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // 组件初始化读取路由参数
    // this.route.params.subscribe((res: any) => {
    //   console.log('得到的路由参数为');
    //   console.log(res);
    //   this.goodNumber = res.id
    // })
    // let params = this.route.snapshot.queryParams
    let params = this.route.snapshot.params as User
    this.goodNumber = params['id']
    console.log(params);

  }
}
