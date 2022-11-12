import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './com-todo-list.component.html',
  styleUrls: ['./com-todo-list.component.css']
})
export class ComTodoListComponent implements OnInit {
  todoList = ['开会', '吃饭', '回家'];
  content = '';
  constructor() { }

  ngOnInit(): void {
  }
  toAdd() {
    this.todoList.push(this.content);
    this.content = ''
  }
  deleteList(value: string) {
    this.todoList = this.todoList.filter(item => item != value)
  }
}
