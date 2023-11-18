import { Component, OnInit } from '@angular/core';
import { TodoListService } from './Service/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoListService]
})
export class AppComponent implements OnInit{
[x: string]: any;
  title = 'todolist';
  todoLists: Object | undefined;

  constructor(private todoListService: TodoListService){
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

/* ngOnInit(){
  console.log('On init @@@@@@@@@@@');
  this.todoListService.getTodoList().subscribe((data) => {
    this.todoLists = data;
  })
} */
}
