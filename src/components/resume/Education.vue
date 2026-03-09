<template>
<section class="timeline">
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="school-outline"></ion-icon>
    </div>
    <h3 class="h3">Education</h3>
  </div>

  <ol class="timeline-list">
    <li class="timeline-item" v-for="(edu, index) in educations" :key="index">
      <h4 class="h4 timeline-item-title">
        {{ edu.institution }}
        <span>📍 {{ edu.location }}</span>
      </h4>
      <p class="text-orange-yellow-crayola" style="margin-bottom: 0.25rem;">
        {{ edu.certificate }}
        <span class="float-right">🗓️ {{ edu.date }}</span>
      </p>
      <div class="timeline-text">
        <ul>
          <li v-for="(item, jndex) in edu.description" :key="jndex">{{ item }}</li>
        </ul>
      </div>
    </li>
  </ol>

</section>
</template>

<script setup lang="ts">
interface Education {
  institution: string;
  location: string;
  certificate: string;
  date: string;
  description?: string[];
}

const educations: Education[] = [
  {
    institution: 'University of Michigan',
    location: 'Ann Arbor, Michigan',
    certificate: 'Bachelors of Science',
    date: 'Sep. 2019 — May 2023',
    description: [
      'Triple major in computer science, data science, and applied mathematics with focus in numerical and applied analysis',
      'Grade: 3.286 / 4.000',
      'Activities and societies: Vietnamese Student Association, Michigan Data Science Team, Michigan Muscle Club, Pickleball, Fitness Trainer',
      'Coached and trained many new gym goers to be more physically fit and intelligent with proper exercise selection and nutritional diet. Picked up an interest in pickleball during my last year, and spread the love and joy for sport to others, with interest in coaching and officiating in tournament games.'
    ]
  },
  {
    institution: 'East Kentwood High School',
    location: 'Grand Rapids, Michigan',
    certificate: 'High School Diploma',
    date: 'Aug. 2015 - June 2019',
    description: [
      'Grade: 4.2708 / 4.0000',
      'Activities and societies: National Honors Society',
      'Courses: AP Calculus BC, AP Computer Science A, AP Statistics, AP Chemistry, AP Physics, AP Microeconomics, AP Macroeconomics, and AP English Literature and Composition',
      'Involvements: Lead Tutor of National Honors Society, Algebra Tutor, Geometry Tutor, Pre-Calculus Tutor, Chemistry Tutor, AP Physics Tutor'
    ]
  }
]

</script>