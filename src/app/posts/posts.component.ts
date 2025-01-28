import { Component, OnInit } from '@angular/core';
import { PostService } from '../post/post.service';
import { Post } from '../post/post';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  blogs: Post[] = [];
  
  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAllBlogs().subscribe(x=> {
      this.blogs = x;
    });
  }

}
