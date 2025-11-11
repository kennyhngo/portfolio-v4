<template>
<section class="skill">
  <h3 class="h3 skills-title">Programming Language Proficiency</h3>
  <ul class="skills-list content-card">
    <li class="skills-item" v-for="(skill, index) in skills" :key="index">
      <div class="title-wrapper">
        <h5 class="h5">{{ skill.name }}</h5>
        <data :value="skill.level">{{ skill.level }}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" :style="{ width: skill.level + '%' }"></div>
      </div>
    </li>
  </ul>
</section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'ABL Progress', level: 75 },
  { name: 'Bash', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'C#', level: 87 },
  { name: 'CSS', level: 80 },
  { name: 'HTML', level: 90 },
  { name: 'Java', level: 70 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'Python', level: 100 },
  { name: 'Vue', level: 80 },
].sort((a, b) => b.level - a.level);
</script>