import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { PostCreate } from './components/post-create/post-create';
const routes: Routes = [
  { path: '', component: PostList },
  { path: 'write', component: PostCreate },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
