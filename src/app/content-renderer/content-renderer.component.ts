import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
export class ContentRendererComponent implements OnInit {
  @Input({required: true}) content!: NgContent; //see also: @Input({transform: transFunction})
  isRecursive: boolean = false;

  ngOnInit() {
    console.log('content', this.content);
    console.log(typeof this.content.elementContent);
    console.log(typeof this.content.elementContent === 'object');
    if (typeof this.content.elementContent === 'object') { //array returns 'object'
      this.isRecursive = true;
    }
  }

  forceNgContent(ngContOrString: NgContent | string): NgContent {
    const emptyContent = new NgContent(NgContentType.text, '');

    return ngContOrString.hasOwnProperty('elementType') ? ngContOrString as NgContent : emptyContent;
  }
}
