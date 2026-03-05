import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS, Post } from '../data/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }
}
