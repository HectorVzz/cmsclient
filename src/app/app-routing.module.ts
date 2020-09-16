import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { PostComponent } from './views/post/post.component';

const routes: Routes = [
  {path: 'home' , component: MainComponent},
  {path: 'post/:id' , component: PostComponent, },
  {path: '**', pathMatch: 'full' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
