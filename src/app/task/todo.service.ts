import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  todoKey = 'todo'
  todos: Todo[] = []


  constructor() { }

  getAllTodos(): Todo[] {
    const cache = JSON.parse(localStorage.getItem(this.todoKey));

    return cache

 }

  addTodo(todo: Todo) {
    let cache: Todo[] = [];

    if(this.getAllTodos() === null){
      cache.push(todo);
    }else{
      cache = this.getAllTodos();
      cache.push(todo);
    }

    localStorage.setItem(this.todoKey, JSON.stringify(cache))

  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo
  }

  deleteTodo(todo: Todo) {

    let todos = this.getAllTodos()
    // this.todos.splice(index, 1)
  }

  deleteTodos(todo: Todo) {

    console.log(this.todoKey);
    localStorage.removeItem('todos')
    // this.todos.splice(index, 1)
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
