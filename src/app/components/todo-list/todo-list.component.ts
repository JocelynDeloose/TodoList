import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/Service/todo-list.service';
import { Todo } from 'src/app/models/todoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 todoList!: Todo | any;

 constructor(private todoListService : TodoListService){}

 
 ngOnInit(): void {
   this.getTodoList();
   
  }
  getTodoList(){
 this.todoListService.getAll().subscribe((data: any) => {
       this.todoList = data;
       console.log(data);
     });
  }

deleteATask(id: number) {
this.todoListService.deleteById(id).subscribe(x =>
  console.log(x)
);
setTimeout(() => {
  this.getTodoList();
}, 1000);
//this.getTodoList();
}


  
  
}
