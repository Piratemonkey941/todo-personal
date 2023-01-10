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

  onEditClicked(todoIndex:number) {
    let etodo: Todo = {
      text: this.editedText,
      details: this.detailsText,
      isCompleted: false
    }
    this.todoService.editTodo(todoIndex, etodo)
    this.editClicked.emit()
    console.log('onEditClicked')
  }


  //May not work
  onComplete(todo){
    todo.isCompleted = true;
    this.todoService.editTodo(this.todoIndex, todo)
    // TODO: Call methods on the todo service to persist the completed todo
  }

  // TODO: This should be aclled by the template delete button
  onDelete(todoIndex) {

    console.log('delete')
    this.todoService.deleteTodo(todoIndex)
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
