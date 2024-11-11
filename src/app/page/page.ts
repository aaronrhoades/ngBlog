export class Page {
    slug: string;
    title: string;
    body: NgElement[];

    constructor(slug: string, title: string, body: NgElement[]) {
        this.slug = slug;
        this.title = title;
        this.body = body;
    }
}

export class NgElement {
    elementType: NgElementType = NgElementType.text;
    elementContent: NgElement[] | string = '';
    href?: string;
    styles?: string[];

    constructor(elementType: NgElementType, elementContent: NgElement[] | string) {

    }
}

export enum NgElementType {
    p = 'p',
    div = 'div',
    a = 'a',
    img = 'img',
    button = 'button',
    text = 'text',
}