import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
    { 
        path: '',
        component: PageComponent,
    },
    {
        path: 'blog',
        component: PostsComponent,
    },
    {
        path: 'blog/:slug',
        component: PostComponent,
    },
    { 
        path: ':slug',
        component: PageComponent,
    },

];
