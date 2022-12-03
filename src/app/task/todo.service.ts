import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todos: Todo[] = []

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }


  //========================================

// taskKey = 'tasks'



  // constructor() {

    // this.getAllTasks()

  // constructor(private http: HttpClient) {
    // this.serviceURL = 'http://localhost:3000/tasks';
  }

  // addTask(task : Task) {

  //   const cache: Task [] = this.getAllTasks()  //gets all the tasks

  //   cache.push(task);

  //   localStorage.setItem(this.taskKey, JSON.stringify(cache) )

  //   // return this.http.post<Task>(this.serviceURL,task);
  // }


  // getAllTasks(): Task[]  {

  //   const cache = localStorage.getItem(this.taskKey);

  //   const allTasks = JSON.parse(cache)

  //   return allTasks ?? []

  // }

  // deleteTask(task : Task) {
  //   localStorage.removeItem(this.taskKey)


  // }

  // deleteTasks(task : Task) {  // clears all tasks

  //   console.log(this.taskKey);
  //   localStorage.removeItem('tasks')
  // }







//     const cache: Task [] = this.getAllTasks()

//     cache.splice(task)

//     localStorage.removeItem(this.taskKey)
//  }

  // editTask() {
  //   // return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
  // }



 // serviceURL : string ;

  // serviceURL = 'https://codefi-todo-app-default-rtdb.firebaseio.com/';
  // serviceURL = 'https://ng-recipe-book-2f9da-default-rtdb.firebaseio.com/:null';
