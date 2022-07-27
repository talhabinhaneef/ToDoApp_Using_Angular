import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todo } from '../../todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title : string='';
  time: string= "";
  priority:string='';
  description:string= "";
  status:string= "";


  
  
  @Output() todoAdd : EventEmitter<todo> = new EventEmitter();
  constructor() {
    
   }

  ngOnInit(): void {
  }


 
  onSubmit(){
    const todo={
     
      title: this.title,
      time: this.time,
      description: this.description,
      priority: this.priority,
      active : true,
      status: "pending"
      
    }
    
    this.todoAdd.emit(todo);
    
  }

}
