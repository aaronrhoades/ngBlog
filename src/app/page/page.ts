import { NgContent } from "../content-renderer/ng-content";

export class Page {
    slug: string;
    title: string;
    body: NgContent[];

    constructor(slug: string, title: string, body: NgContent[]) {
        this.slug = slug;
        this.title = title;
        this.body = body;
    }
}