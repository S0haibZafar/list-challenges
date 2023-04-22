import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem:string | null;
  todoData:Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todo");
    if(this.localItem == null){
      this.todoData = []
    }else{
      this.todoData = JSON.parse(this.localItem)

    }
    // this.todoData=[
      // {
      //   sno:1,
      //    name:'ALi',
      //   description:'Description',
      //   active: true
      // },
      // {
      //   sno:2,
      //   name:'Khan',
      //   description:'Description',
      //   active: true
      // }
    // ]
   }

  ngOnInit(): void {
  }

  deleteItem(todo:Todo){
    const index = this.todoData.indexOf(todo);
    console.log("Todo::", index)
    this.todoData.splice(index, 1); 
  }

  addItem(todo:Todo){
    console.log("Add Todo::", todo)
    this.todoData.push(todo); 
    localStorage.setItem("todo",JSON.stringify(this.todoData))
  }

}
