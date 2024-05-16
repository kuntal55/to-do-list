import { Component } from '@angular/core';
import { ToDoModel } from '../../model/todo-list.model';
import { MatDialog } from '@angular/material/dialog';
import { TodoCreateComponent } from '../todo-create/todo-create.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrl: './todo-body.component.scss',
})
export class TodoBodyComponent {
  todoList = new Array<ToDoModel>();

  constructor(public dialog: MatDialog, private todoService: TodoService) {}
  
  public someComplete() {
    return this.todoList.every(t=> t.isChecked);
  }

  public checkAllOrNone(event: boolean) {
    this.todoList.forEach(element => {
      element.isChecked = event;
    });
    this.todoService.saveTodo(this.todoList);
  }

  public deleteTodo(item: ToDoModel) {
    this.todoList.splice(this.todoList.indexOf(item),1);
    this.todoService.saveTodo(this.todoList);
  }

  public updateTodo(item: ToDoModel) {
    let index = this.todoList.indexOf(item)
    item.isChecked = !item.isChecked;
    this.todoList[index]=item;
    this.todoService.saveTodo(this.todoList);
  }

  public createTodo() {
    const dialogRef = this.dialog.open(TodoCreateComponent);

    dialogRef.afterClosed().subscribe(kuntal => {
      if(kuntal){
        this.todoList.push(new ToDoModel(kuntal,false));
        this.todoService.saveTodo(this.todoList);
      }
    });
  }

  public allSelectedDelete(){
    const todo = Array<ToDoModel>();
    this.todoList.forEach(element => {
      element.isChecked?'':todo.push(element);
    });
    this.todoList = todo;
    this.todoService.saveTodo(todo);
  }
}
