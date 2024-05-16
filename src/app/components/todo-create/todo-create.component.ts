import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrl: './todo-create.component.scss'
})
export class TodoCreateComponent {
  todoForm = this.fb.group({
    todoName: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    public dialogRef: MatDialogRef<TodoCreateComponent>,
    private fb: FormBuilder
  ) { }

  public onNoClick(){
    this.dialogRef.close();
  }

  public onSubmit(){
    this.todoForm.valid?this.dialogRef.close(this.todoForm.controls.todoName.value):alert('Something went wrong');
  }
}
