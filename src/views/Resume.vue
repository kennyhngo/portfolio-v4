<template>
<article class="resume active" data-page="resume">
  <header>
    <h2 class="h2 article-title">Resume</h2>
  </header>

  <ResumeFile />
  <Education />
  <Experience />
  <Volunteer />
  <Skills />

</article>
</template>

<script setup lang="ts">
import Education from '../components/resume/Education.vue';
import Experience from '../components/resume/Experience.vue';
import ResumeFile from '../components/resume/ResumeFile.vue';
import Skills from '../components/resume/Skills.vue';
import Volunteer from '../components/resume/Volunteer.vue';
</script>