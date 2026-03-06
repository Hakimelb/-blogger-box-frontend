import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../../data/category';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  standalone: false,
  templateUrl: './post-create.html',
  styleUrl: './post-create.css',
})
export class PostCreate implements OnInit {
  categories$!: Observable<Category[]>;

  title = '';
  content = '';
  categoryId = '';

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.categories$ = this.postService.getCategories();
  }

  submit(): void {
    if (!this.title.trim() || !this.content.trim() || !this.categoryId) {
      return;
    }

    this.postService.createPost(this.title, this.content, this.categoryId).subscribe({
      next: () => this.router.navigateByUrl('/'),
    });
  }
}