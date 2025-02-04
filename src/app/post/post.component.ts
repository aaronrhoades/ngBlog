import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PostService } from './post.service';
import { Post } from './post';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  post$!: Observable<Post>;
  slug!: string;
  
  constructor(private postService: PostService){}

  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.slug = String(params.get('slug'));
        return this.postService.getBlogBySlug(this.slug);
      })
    )
  }
}
