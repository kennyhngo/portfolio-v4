<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <router-link to="/" class="navbar-link" active-class="active">About</router-link>
      </li>

      <li class="navbar-item">
        <router-link to="/resume" class="navbar-link" active-class="active">Resume</router-link>
      </li>

      <li class="navbar-item">
        <router-link to="/blog"
          class="navbar-link"
          :class="{ active: isBlogActive }"
        >
          Blog
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isBlogActive = computed(() => {
  return route.path.startsWith('/blog');
});
</script>
