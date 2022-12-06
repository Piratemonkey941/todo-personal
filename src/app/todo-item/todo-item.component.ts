import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {


  @Input() todo: Todo
  @Input() todoIndex: number

  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  constructor( private todoService: TodoService) {}

  editedText: string = '';
  detailsText: string = '';



  ngOnInit(): void {
  }

  // onTodoClicked() {
  //   this.todoClicked.emit()
  // }

  onEditClicked() {
    let etodo: Todo = {
      text: this.editedText,
      details: this.detailsText,
      completed: false
    }
    this.todoService.editTodo(this.todoIndex, etodo)
    this.editClicked.emit()
    console.log('onEditClicked')
  }

  onDeleteClicked(index) {


    this.todoService.deleteTodo(index)
    this.deleteClicked.emit()

    // this.todoArr = this.todoService.getAllTodos();
    // console.log(this.deleteClicked)
  }

  close() {
    this.close()
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return

    const updatedTodo = {
      ...this.todo,
      ...form.value
    }

    // this.dialogRef.close(updatedTodo)
  }

}
