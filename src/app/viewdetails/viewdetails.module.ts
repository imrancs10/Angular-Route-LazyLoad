import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewdetailsComponent } from './viewdetails.component';

const routes: Routes = [
  {
    path: "",
    component: ViewdetailsComponent
  }
]

@NgModule({
  declarations: [ViewdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ViewdetailsModule { }
