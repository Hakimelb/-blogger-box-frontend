import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TopBar } from './components/top-bar/top-bar';
import { PostList } from './components/post-list/post-list';
import { PostListItem } from './components/post-list-item/post-list-item';
import { PostCreate } from './components/post-create/post-create';

@NgModule({
  declarations: [App, TopBar, PostList, PostListItem, PostCreate],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
