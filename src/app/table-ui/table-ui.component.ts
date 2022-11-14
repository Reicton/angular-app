import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'table-ui',
  templateUrl: './table-ui.component.html',
  styleUrls: ['./table-ui.component.css']
})
export class TableUiComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
