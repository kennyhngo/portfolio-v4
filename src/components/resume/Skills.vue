<template>
<section class="skill">
  <h3 class="h3 skills-title">My skills</h3>
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
  { name: 'Python', level: 100 },
  { name: 'Bash', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Vue', level: 80 },
  { name: 'ABL Progress', level: 55 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'C++', level: 85 },
  { name: 'Java', level: 70 },
].sort((a, b) => b.level - a.level);
</script>