import fm from 'front-matter';
import { ref } from 'vue';

export interface BlogMeta {
  title: string;
  date: string;
  category: string;
  image: string;
  alt: string;
  excerpt: string;
  slug: string;
  content?: string;
  link?: string;
}

export async function useBlogPosts() {
  const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
  const blogs = ref<BlogMeta[]>([]);

  for (const path in modules) {
    const raw = await modules[path]() as string;
    const { attributes: metadata } = fm<BlogMeta>(raw);

    blogs.value.push({
      ...metadata,
      link: `/blog/${metadata.slug}`,
    });
  }

  return { blogs };
}