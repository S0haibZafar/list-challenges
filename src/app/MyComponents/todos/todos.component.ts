import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoData:Todo[];

  constructor() {
    this.todoData=[
      {
        sno:1,
        name:'ALi',
        description:'Description',
        active: true
      },
      {
        sno:2,
        name:'Khan',
        description:'Description',
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

}
