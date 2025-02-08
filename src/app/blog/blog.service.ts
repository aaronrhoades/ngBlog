import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BlogPost } from './blog-post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getAllBlogs(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.apiUrl + '/Blog');
  }

  public getBlogBySlug(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.apiUrl + '/Blog/BySlug/' + slug);
  }
}
