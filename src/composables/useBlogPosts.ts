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
  sticky?: boolean;
}

export async function useBlogPosts() {
  const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
  const blogs = ref<BlogMeta[]>([]);
  const temp: BlogMeta[] = [];

  for (const path in modules) {
    const raw = await modules[path]() as string;
    const { attributes: metadata } = fm<BlogMeta>(raw);

    metadata.date = new Date(metadata.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).replace(/,([^,]*)$/, '$1');

    temp.push({
      ...metadata,
      link: `/blog/${metadata.slug}`,
    });
  }

  // Sort: sticky posts first, then by descending date
  temp.sort((a, b) => {
    const stickyA = a.sticky ? 1 : 0;
    const stickyB = b.sticky ? 1 : 0;

    if (stickyA !== stickyB) {
      return stickyB - stickyA;
    }

    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  blogs.value = temp;
  return { blogs };
}
