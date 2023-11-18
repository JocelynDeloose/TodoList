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
     this.todoListService.getAll().subscribe((data: any) => {
      this.todoList = data;
    });
  }

  
  
}
