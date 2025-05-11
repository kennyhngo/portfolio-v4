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
      <li class="service-item">
        <div class="service-icon-box">
          <img src="./assets/images/icon-design.svg" alt="design icon" width="40">
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Web design</h4>
          <p class="service-item-text">
            The most modern and high-quality design made at a professional level.
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40">
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Web development</h4>
          <p class="service-item-text">
            High-quality development of sites at the professional level.
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40">
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Mobile apps</h4>
          <p class="service-item-text">
            Professional development of applications for iOS and Android.
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40">
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Photography</h4>
          <p class="service-item-text">
            I make high-quality photos of any category at a professional level.
          </p>
        </div>
      </li>
    </ul>
  </section>
</article>
</template>

<script setup lang="ts">
const aboutText = [
  "Hello there, I'm Kenny! I am a software engineer with a passion for both teaching and continuous learning. I was introduced to coding in high school and was instantly fascinated by the idea that we can create programs to solve problems, automate tasks, and bring ideas to life. The limitless creative potential of software development still inspires me every day.",

  "Currently, I'm focused on becoming highly proficient across the full stack: frontend, backend, and cloud technologies. My goal is to build a project-based learning web app that will teach aspiring programmers how to code with hands-on projects.",

  "Outside of coding, I enjoy tai chi, martial parts, playing pickleball, and personal training at the gym. I'm always exploring new hobbies and experiences to grow as a developer and as a person."
];
</script>