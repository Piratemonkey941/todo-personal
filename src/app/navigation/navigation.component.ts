import { Component, OnInit } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  collapsed: boolean = true;
show: boolean = false;

  constructor(private todoService: TodoService) { }

  // taskArr: Task[];  // similar to myBooks[]

  // public addTaskValue: string = '';

  ngOnInit(): void {
  }


  // deleteTasks() {   // clear all tasks

  //   this.taskService.deleteTasks(new Task(this.addTaskValue))
  //   // this.taskArr = this.taskService.getAllTasks();
  // }

}
