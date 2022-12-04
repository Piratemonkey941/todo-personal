import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
// import { EditModalComponent } from '../edit-modal/edit-modal.component'

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





  // editTodo(todo: Todo) {

  //   const index = this.todoArr.indexOf(todo)

  //   let dialogRef = this.dialog.open( {
  //     width: '700px',
  //     data: todo
  //   });
  // }


}



  // deleteTodo(form: NgForm) {
  //   // const index = this.todoArr.indexOf(todo)

  //   let thisTodo: Todo = {
  //     text: form.value.text,
  //     completed: true
  //   }
  //   form.reset()
  //   this.todoService.deleteTodo()

  //   this.todoArr = this.todoService.getAllTodos();
  // }

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.todoService.updateTodo(index, result)
  //     }
  //   })
  // }
  // console.log(idx)
  // deleteTasks() {   // clear all tasks


  //   this.taskService.deleteTasks(new Task(this.addTaskValue))
  //   this.taskArr = this.taskService.getAllTasks();
  // }

  // editTask(idx: number, editTask: Task) {

  //   this.todoArr[idx] = editTask

  //   this.todoArr.slice();


  //   //  this.taskService.editTask(this.editTaskValue)
  //   // this.editTaskValue()
  //   //array.index of
  // }







//   addDetails() {
//     // this.taskObj.description = this.addTaskValue;
//     // // NOTE: Task service is being re-written.
//     // this.taskService.addTask(this.taskObj).subscribe(
//     //   (res) => {
//     //     this.ngOnInit();
//     //     this.addTaskValue = '';
//     //   },
//     //   (err) => {
//     //     alert(err);
//     //   }
//     // );
//   }

//   call(etask : Task) {
//     this.taskObj = etask;
//     this.editTaskValue = etask.name;
//   }   this.ngOnInit();
//     //     this.addTaskValue = '';
//     //   },
//     //   (err) => {
//     //     alert(err);
//     //   }
//     // );
//   }


//   // NOTE: Enter key press to form submit should be handled using default browser form behaviors.
//   handleKeyUp(e) {
//     if (e.keyCode === 13) {
//       this.handleSubmit(e);
//     }
//   }
// }

//   handleSubmit(e) {
//     // e.preventDefault();
//     // this.taskObj.name = this.addTaskValue;
//     // // NOTE: Task service is being re-written.
//     // this.taskService.addTask(this.taskObj).subscribe(
//     //   (res) => {
//     //
// // throw new Error('Method not Implimented')

  // editTaskValue : string = '';
 // taskObj : Task = new Task();
  // taskArr  = this.getAllTask();
  // btnInsert = document.getElementById("btnInsert")



    // getTasks() {
    //   return this.taskArr.slice();
    // }

    // getTask(idx: number) {
    //   return this.getTasks()[idx];
    // }
