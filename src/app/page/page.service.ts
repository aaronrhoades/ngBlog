import { Injectable } from '@angular/core';
import { NgElementType, Page } from './page';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  protected pages: Page[] = [
    new Page(
      'home',
      "Home Page",
      [{
        elementType: NgElementType.p,
        elementContent: [
          {
            elementType: NgElementType.text,
            elementContent: "Hello world. ",
          },
          {
            elementType: NgElementType.a,
            elementContent: "Click Me.",
            href: "/"
          }
        ]
      }]
    ),
    {
      slug:  'hello-world',
      title: "Hello World",
      body: [{
        elementType: NgElementType.p,
        elementContent: [
          {
            elementType: NgElementType.text,
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
