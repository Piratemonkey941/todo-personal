import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';


Injectable({
  providedIn: 'root',
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  key:any

  todoArr: Todo[];  // similar to myBooks[]
  index: number
  i: number


  public addTaskValue: string = '';

  showValidationErrors: boolean

  constructor(private todoService: TodoService,  private dialog: MatDialog) {}

  ngOnInit(): void {
    this.todoArr = this.todoService.getAllTodos();
   }


  addTodo(form: NgForm) {

      let thisTodo: Todo = {
        text: form.value.text,
        completed: false
      }
      this.todoService.addTodo(thisTodo)

      form.reset()
      this.todoArr = this.todoService.getAllTodos();
    }


    deleteTodo(todo:Todo){
      this.todoArr = this.todoService.getAllTodos();
    }

  }



 