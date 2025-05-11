<template>
<section class="timeline">
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="body-outline"></ion-icon>
    </div>
    <h3 class="h3">Volunteer</h3>
  </div>

  <ol class="timeline-list">
    <li class="timeline-item" v-for="(vol, index) in volunteer" :key="index">
      <h4 class="h4 timeline-item-title">
        {{ vol.institution }}
        <span>📍 {{ vol.location }}</span>
      </h4>
      <p class="text-orange-yellow-crayola" style="margin-bottom: 0.25rem">
        {{ vol.role }}
        <span class="float-right">🗓️ {{ vol.date }}</span>
      </p>
      <div class="timeline-text">
        <ul>
          <li v-for="(item, jndex) in vol.description" :key="jndex">{{ item }}</li>
        </ul>
      </div>
    </li>
  </ol>
</section>
</template>

<script setup lang="ts">
const volunteer = [
  {
    institution: 'Golden Tiger Kung Fu Academy',
    location: 'Grand Rapids, MI',
    role: 'Web Developer',
    date: 'Apr. 2025 — Present',
    description: [
      'Collaborated with Master Han Mei to maintain and update the institute\'s WordPress website, ensuring accurate and user-friendly content through revised class schedules, updated biographies, and removal of outdated links',
      'Enhanced site navigation and UI consistency to improve user experience and engagement',
      'Integrated Google Analytics to track traffic trends and applied basic SEO techniques to increase visibility of high - performing pages',
    ],
  },
];
</script>