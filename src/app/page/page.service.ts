import { Injectable } from '@angular/core';
import { Page } from './page';
import { Observable, of } from 'rxjs';
import { NgContentType } from '../content-renderer/ng-content';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  protected pages: Page[] = [
    new Page(
      'home',
      "Home Page",
      [{
        elementType: NgContentType.p,
        elementContent: [
          {
            elementType: NgContentType.text,
            elementContent: "Hello world. ",
          },
          {
            elementType: NgContentType.a,
            elementContent: "Click Me.",
            href: "/hello-world"
          }
        ]
      }]
    ),
    {
      slug:  'hello-world',
      title: "Hello World",
      body: [{
        elementType: NgContentType.p,
        elementContent: [
          {
            elementType: NgContentType.text,
            elementContent: "Hello World"
          }

        ]
      }]
    }
    
  ];
  constructor() { }

  public getPageBySlug(slug: string | undefined) : Observable<Page> {
    let page: Page | undefined = undefined;

    if(!slug) {
      page = this.pages.find(page => page.slug === 'home');
    } else {
      page = this.pages.find(page => page.slug === slug);
    }

    if(!page) {
      page = new Page('404', '404',[]);
    }
    
    return of(page);
  }
}
