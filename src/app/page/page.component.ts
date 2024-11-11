import { Component, inject, OnInit } from '@angular/core';
import { PageService } from './page.service';
import { ActivatedRoute } from '@angular/router';
import { Page } from './page';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  pageService: PageService = inject(PageService);
  page!: Page | undefined;

  ngOnInit() {
    const slug: string | undefined = this.route.snapshot.params['slug'];
    this.pageService.getPageBySlug(slug as string).subscribe(x => this.page = x);
  }
  
}
