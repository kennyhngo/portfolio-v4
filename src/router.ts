import { createRouter, createWebHistory } from 'vue-router';
import Blog from './views/Blog.vue';
import BlogPost from './views/BlogPost.vue';
import Home from './views/Home.vue';
import Resume from './views/Resume.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/resume', name: 'Resume', component: Resume },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/blog/:slug', component: BlogPost },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
