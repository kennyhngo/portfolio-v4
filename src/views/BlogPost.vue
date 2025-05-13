<template>
<article class="about active" v-if="post">
  <header>
    <h2 class="h2 article-title">Blog</h2>
  </header>
  <h2 class="h2">{{ post.title }}</h2>
  <div class="meta-info">
    <span>{{ formatDate(post.date) }}</span>
    <span class="dot" aria-hidden="true"></span>
    <span>{{ post.category }}</span>
  </div>
  <div class="separator"></div>

  <section class="blog-posts content-wrapper">
    <div class="blog-content about-text" v-html="postHtml">
    </div>
  </section>
</article>
</template>

<script setup lang="ts">
import fm from 'front-matter';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { type BlogMeta } from '../composables/useBlogPosts';

const route = useRoute();
const post = ref<BlogMeta>();
const postHtml = ref<string>('');
const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang, _) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }),
);
const renderer = {
  image(token: { href: string, title: string | null, text: string }) {
    const altText = token.text ?? '';
    const altAttr = altText.replace(/"/g, '&quot;');
    return `
      <div class="markdown-image">
        <img src="${token.href}" alt="${altAttr}" />
        ${altText ? `<p class="image-caption">${altText}</p>` : ''}
      </div>
    `
  },
};
marked.use({ renderer });

function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  let daysLater = 0;
  if (targetDate > currentDate) {
    daysLater = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  }

  if (daysLater > 365) {
    return `${fullDate} (${daysLater}d later)`;
  } else if (daysLater > 30) {
    const weeksAgo = Math.floor(daysLater / 7);
    return `${fullDate} (${weeksAgo}w later)`;
  } else if (daysLater > 7) {
    const monthsAgo = Math.floor(daysLater / 30);
    return `${fullDate} (${monthsAgo}mo later)`;
  } else if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
};

onMounted(async () => {
  const slug = route.params.slug;
  const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
  const match = Object.entries(modules).find(([path]) =>
    path.includes(`${slug}.md`)
  );

  if (match) {
    const raw = await match[1]() as string;
    const { attributes, body } = fm<BlogMeta>(raw);
    post.value = attributes;
    postHtml.value = marked.parse(body).toString();
  }
});
</script>
