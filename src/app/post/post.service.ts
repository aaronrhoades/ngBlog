import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl: string = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  public getAllBlogs(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + '/Blog');
  }
}
