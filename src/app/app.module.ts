import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideosComponent } from './videos/videos.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { AddVideoComponent } from './add-video/add-video.component'; //import Routes từ module @angular/router

const routes: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'videos/:id/edit', component: EditVideoComponent },
  { path: 'videos/add', component: AddVideoComponent },
  { path: 'videos', component: VideosComponent }
];


//Import RouterModule vào import của app.module

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VideosComponent,
    EditVideoComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
