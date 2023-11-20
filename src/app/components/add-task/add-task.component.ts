import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { orderForm } from 'src/app/Forms/FormsModule';
import { TodoListService } from 'src/app/Service/todo-list.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit{

orderForm!: FormGroup;

constructor(
   private todoListService: TodoListService,  
   private fb : FormBuilder
   
   ){}


ngOnInit(): void {
 this.orderForm = this.fb.group({
  name: new FormControl(''),
  description: new FormControl(''),
  priority: new FormControl('')
 });
}



onSubmit() :void {
const todo: orderForm| any = this.orderForm.value;
this.todoListService.postTodo(todo);
}

}
