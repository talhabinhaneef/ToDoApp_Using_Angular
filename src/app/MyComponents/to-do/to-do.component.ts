import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { todo } from '../../todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todo: todo[] = [];
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  constructor() {
  }
  ngOnInit(): void {
  }
  todoAdd(todo: todo) {
    console.log(todo);
    this.todo.push(todo);
    console.log(" Added ! ");
  }

  onClick(todo: todo) {
    console.log(todo);
    const index = this.todo.indexOf(todo);
    this.todo.splice(index, 1);
    console.log(" Deleted ! ");
  }
  check(){
    console.log(new Date());
    
    


  }
}
