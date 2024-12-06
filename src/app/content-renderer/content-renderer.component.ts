import { AfterViewInit, Component, inject, Injector, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgContent, NgContentType } from './ng-content';


@Component({
  selector: 'content-renderer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content-renderer.component.html',
  styleUrl: './content-renderer.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContentRendererComponent implements AfterViewInit {
  @Input({required: true}) content!: NgContent[]; //see also: @Input({transform: transFunction})
  readonly NgContentType = NgContentType;
  vcr = inject(ViewContainerRef);
  injector = inject(Injector);
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;

  ngAfterViewInit() {

    this.vcr.createEmbeddedView(this.contentTemplate, this.content);

  }

}
