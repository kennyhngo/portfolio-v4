<template>
<article class="blog active" data-page="blog">
  <header>
    <h2 class="h2 article-title">Blog</h2>
  </header>

  <!-- List shown on medium and up -->
  <ul class="filter-list about-text">
    <li v-for="(category, index) in categories" 
      :key="index" 
      :class="{ active: selectedCategory === category}"
      @click="selectedCategory = category"
    >{{ category }}</li>
  </ul>

  <!-- Dropdown shown on small screens -->
  <select class="filter-dropdown" v-modal="selectedCategory">
    <option v-for="(category,index) in categories" :key="index" :value="category">
      {{ category }}
    </option>
  </select>

  <section class="blog-posts">
    <ul class="blog-posts-list">
      <li class="blog-post-item" v-for="blog in paginatedBlogs" :key="blog.title">
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

    <div class="pagination">
      <button
        v-for="page in visiblePages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="currentPage = page"
      >{{ page }}</button>
    </div>
  </section>
</article>
</template>


<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useBlogPosts, type BlogMeta } from '../composables/useBlogPosts';

// Blog filtering
const blogs = ref<BlogMeta[]>([]);
const selectedCategory = ref<string>('All');
const categories = computed(() => {
  const uniqueCategories = new Set(blogs.value.map(blog => blog.category));
  return ['All', ...[...uniqueCategories].sort()];
});
const filteredBlogs = computed(() => {
  return selectedCategory.value === 'All' 
    ? blogs.value 
    : blogs.value.filter(blog => blog.category === selectedCategory.value);
});

// Blog pagination
const currentPage = ref<number>(1);
const pageSize = 6;
const pageCount = computed(() => {
  return Math.ceil(filteredBlogs.value.length / pageSize);
});
const paginatedBlogs = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredBlogs.value.slice(start, start + pageSize);
});
watch(selectedCategory, () => {
  currentPage.value = 1
});

// Pagination control
const visiblePages = computed(() => {
  return Array.from({ length: pageCount.value }, (_, i) => i + 1);
});

onMounted(async () => {
  const { blogs: loadedBlogs } = await useBlogPosts();
  blogs.value = loadedBlogs.value;
});
</script>
