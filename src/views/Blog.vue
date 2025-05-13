<template>
<article class="blog active" data-page="blog">
  <header>
    <h2 class="h2 article-title">Blog</h2>
  </header>

  <section class="blog-posts">
    <ul class="blog-posts-list">
      <li class="blog-post-item" v-for="(blog, index) in blogs" :key="index">
        <a :href="blog.link">
          <figure class="blog-banner-box">
            <img :src="blog.image" :alt="blog.alt" loading="lazy" />
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">{{ blog.category }}</p>
              <span class="dot"></span>
              <time :datetime="blog.date">{{ blog.date }}</time>
            </div>
            <h3 class="h3 blog-item-title">{{ blog.title }}</h3>
            <p class="blog-text">{{ blog.excerpt }}</p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</article>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useBlogPosts, type BlogMeta } from '../composables/useBlogPosts';

const blogs = ref<BlogMeta[]>([]);

onMounted(async () => {
  const { blogs: loadedBlogs } = await useBlogPosts();
  blogs.value = loadedBlogs.value;
});

</script>