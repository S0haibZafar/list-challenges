import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input('todoItem') todoItem:Todo;
  @Output() deleteEvent :EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.todoItem = new Todo();
   }

  ngOnInit(): void {
  }

  deleteMethod(todoData: Todo){
    this.deleteEvent.emit(todoData);
  }

}
