import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../data/post';
import { Category } from '../data/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/v1/posts`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/v1/categories`);
  }

  createPost(title: string, content: string, categoryId: string): Observable<Post> {
    const params = new HttpParams()
      .set('title', title)
      .set('content', content)
      .set('categoryId', categoryId);

    return this.http.post<Post>(`${this.apiUrl}/v1/posts`, null, { params });
  }
}