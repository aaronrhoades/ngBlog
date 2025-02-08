import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BlogService } from '../blog.service';
import { BlogPost } from '../blog-post';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  blogPost$!: Observable<BlogPost>;
  slug!: string;
  
  constructor(private blogService: BlogService){}

  ngOnInit() {
    this.blogPost$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.slug = String(params.get('slug'));
        return this.blogService.getBlogBySlug(this.slug);
      })
    )
  }
}
