import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
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
    //loadChildren: "app/viewdetails/viewdetails.module#ViewdetailsModule"
  },
  {
    path: "about",
    loadChildren: () => AboutModule
    //loadChildren: "app/about/about.module#AboutModule"
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
