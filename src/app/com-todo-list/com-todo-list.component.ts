import { Component, OnInit, Inject,LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'todo-list',
  templateUrl: './com-todo-list.component.html',
  styleUrls: ['./com-todo-list.component.css']
})
export class ComTodoListComponent implements OnInit {
  todoList = ['开会', '吃饭', '回家'];
  content = '';
  date:any = [];

  constructor(
    @Inject(LOCALE_ID) private locale:string
  ) { }
  
  ngOnInit(): void {
  }
  onChange(result: any[]): void {
    if(result.length!=0){
      result[0]=formatDate(result[0], 'yyyy-MM-dd', this.locale)
      result[1]=formatDate(result[1], 'yyyy-MM-dd', this.locale)
    }
  }
  toAdd() {
    this.todoList.push(this.content);
    this.content = ''
  }
  deleteList(value: string) {
    this.todoList = this.todoList.filter(item => item != value)
  }
}
