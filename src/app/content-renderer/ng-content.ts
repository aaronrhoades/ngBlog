export class NgContent {
    elementType: NgContentType = NgContentType.text;
    elementContent: NgContent[] | string | undefined;
    href?: string;
    routerLink?: string;
    styles?: string[];

    constructor(elementType: NgContentType, elementContent: NgContent[] | string) {

    }

    toString() {
        const contentStr = (typeof this.elementContent === 'string') ? this.elementContent : '';
        return this.elementType + ': ' + contentStr;
    }
}

export enum NgContentType {
    p = 'p',
    div = 'div',
    a = 'a',
    img = 'img',
    button = 'button',
    text = 'text',
}