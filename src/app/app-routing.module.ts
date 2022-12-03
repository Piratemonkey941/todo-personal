import { DashboardComponent } from "./dashboard/dashboard.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "calendar", component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

