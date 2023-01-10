import { DashboardComponent } from "./dashboard/dashboard.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "dashboard", component: DashboardComponent},
  {path: "calendar", component: CalendarComponent},
  
  { path: 'auth', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

