<template>
<main>
  <SideBar />
  <div class="main-content">
    <NavBar />
    <router-view />
  </div>
</main>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
</script>
