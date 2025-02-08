import { Component, OnInit } from '@angular/core';
import { BlogService as BlogService } from '../blog.service';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.scss'
})
export class BlogPostsComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  
  constructor(private postService: BlogService) {

  }

  ngOnInit(): void {
    this.postService.getAllBlogs().subscribe(x=> {
      this.blogPosts = x;
    });
  }
}