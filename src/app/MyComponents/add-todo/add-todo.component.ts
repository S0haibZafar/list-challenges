import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() todoAdd :  EventEmitter<Todo> =new EventEmitter();

  title:string;
  description:string;
  constructor() { 
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {
  }

  onSubmit(){

    const todo = {
      sno:8,
      name:this.title,
      description:this.description,
      active:true
    }
    this.todoAdd.emit(todo);
  }
  
}
