import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { BlogPostsComponent } from './blog/blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

export const routes: Routes = [
    { 
        path: '',
        component: PageComponent,
    },
    {
        path: 'blog',
        component: BlogPostsComponent,
    },
    {
        path: 'blog/:slug',
        component: BlogPostComponent,
    },
    { 
        path: ':slug',
        component: PageComponent,
    },

];
