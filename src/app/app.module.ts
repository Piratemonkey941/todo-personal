import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { Task } from './task/task.model';
// import {  } from '';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ArchivedComponent } from './archived/archived.component';
import { AuthComponent } from './auth/auth.component';
// import { EditModalComponent } from './edit-modal/edit-modal.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
      CalendarComponent,
      NavigationComponent,
      TodoItemComponent,
      ArchivedComponent,
      AuthComponent,
      // EditModalComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
