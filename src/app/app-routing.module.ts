import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewdetailsModule } from './viewdetails/viewdetails.module';
import { AboutModule } from './about/about.module';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "viewdetails",
    loadChildren: () => ViewdetailsModule
  },
  {
    path: "about",
    loadChildren: () => AboutModule
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
