import { Injectable } from '@angular/core';
import { ToDoModel } from '../model/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public fetchTodo(): Array<ToDoModel>{
    let todos = localStorage.getItem('todos');
    let todoList = JSON.parse(todos || "");
    return todoList;
  }

  public saveTodo(todoList: Array<ToDoModel>){
    let todos = JSON.stringify(todoList);
    localStorage.setItem('todos',todos);
  }
}
