import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../models/todoList';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private url = "http://localhost:8080/todotask"
  

  

  constructor(private httpClient: HttpClient) {

   }
   /* getTodoList() {
    return this.httpClient.get(this.url)
   } */



   postTodo(todo: Todo) {
    console.log("@@@@@@@@@@ ça a marché???")
    return this.httpClient.post("http://localhost:8080/todotaskpost", todo, {headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })}).subscribe(res => console.log('HTTP response', res),
            err => console.log('HTTP Error', err),
            () => console.log('HTTP request completed.'))
   
   }

   getTodoListById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`)
   }
   getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }

  deleteById(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
  }

  }
