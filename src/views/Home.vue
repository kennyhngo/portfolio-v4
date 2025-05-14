<template>
<article class="about active" data-page="about">
  <header>
    <h2 class="h2 article-title">About me</h2>
  </header>

  <section class="about-text">
    <p v-for="(text, index) in aboutText" :key="index">
      {{ text }}
    </p>
  </section>


  <!-- service -->
  <section class="service">
    <h3 class="h3 service-title">What I'm doing</h3>

    <ul class="service-list">
      <li class="service-item" v-for="(service, index) in services" :key="index">
        <div class="service-icon-box">
          <img :src="service.src" :alt="service.alt" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">{{ service.title }}</h4>
          <p class="service-item-text">{{ service.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</article>
</template>

<script setup lang="ts">
import fullStackLogo from '@/assets/full-stack.svg';
import gamePluginLogo from '@/assets/game-plugin.svg';
import pickleballLogo from '@/assets/pickleball.svg';

interface Service {
  src: string;
  alt: string;
  title: string;
  text: string;
};

const services: Service[] = [
  {
    src: fullStackLogo,
    alt: 'Full stack development logo',
    title: 'Full Stack Development',
    text: 'Learning the whole tech stack to create a project-based learning web app.',
  },
  {
    src: gamePluginLogo,
    alt: 'Video game plugin logo',
    title: 'Video Game Modding',
    text: 'Reverse engineering game code to have extra fun with friends in private lobbies.'
  },
  {
    src: pickleballLogo,
    alt: 'Pickleball logo',
    title: 'Pickleball',
    text: 'I play pickleball almost every day, aiming to win a state or regional tournament.',
  },
];

const aboutText = [
  "Hello there, I'm Kenny! I am a software engineer with a passion for both teaching and continuous learning. I was introduced to coding in high school and was instantly fascinated by the idea that we can create programs to solve problems, automate tasks, and bring ideas to life. The limitless creative potential of software development still inspires me every day.",

  "Currently, I'm focused on becoming highly proficient across the full stack: frontend, backend, and cloud technologies. My goal is to build a project-based learning web app that will teach aspiring programmers how to code with hands-on projects.",

  "Outside of coding, I enjoy tai chi, martial arts, playing pickleball, and personal training at the gym. I'm always exploring new hobbies and experiences to grow as a developer and as a person."
];
</script>
