<template>
<section class="timeline">
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="desktop-outline"></ion-icon>
    </div>
    <h3 class="h3">Experience</h3>
  </div>

  <ol class="timeline-list">
    <li class="timeline-item" v-for="(exp, index) in experiences" :key="index">
      <h4 class="h4 timeline-item-title">
        {{ exp.company }}
        <span>📍 {{ exp.location }}</span>
      </h4>
      <p class="text-orange-yellow-crayola" style="margin-bottom: 0.25rem">
        {{ exp.title }}
        <span class="float-right">🗓️ {{ exp.date }}</span>
      </p>
      <div class="timeline-text">
        <ul>
          <li v-for="(item, jndex) in exp.description" :key="jndex">{{ item }}</li>
        </ul>
      </div>
    </li>
  </ol>
</section>
</template>

<script setup lang="ts">
const experiences= [
  {
    company: 'Gordon Food Service',
    location: 'Grand Rapids, MI',
    title: 'Associate Software Engineer',
    date: 'Sep. 2024 — May 2025',
    description: [
      'Delivered bug fixes and feature enhancements in ABLProgress, deploying production-ready code through a gated workflow requiring sysadmin and manager approvals',
      'Created Python scripts to automate POS support tasks(SFTP transfers, file generation, templated messages), saving ~5-10 hours / week for the support team',
      'Independently owned resolution of sales loading errors in Toshiba POS logs, modifying production files and coordinating with the sales accounting team',
      'Promoted to Subject Matter Expert in sales loading support, enabling a senior teammate to offload responsibilities and improving team Jira documentation rate',
    ]
  },
  {
    company: 'CareLinc Medical Equipment',
    location: 'Grand Rapids, MI',
    title: 'Junior Developer',
    date: 'May 2024 — Sep. 2024',
    description: [
      'Implemented a cross-departmental reporting pipeline using C# and Python, automating 15+ API calls to collect task data, visualize task queue with matplotlib, and distribute targeted updates via SMTP to internal teams and executives',
      'Researched and deployed Gitea to replace ad-hoc file storage with a secure, self-hosted version control system, laying the foundation for collaborative development and internal code governance',
    ]
  },
  {
    company: 'Freelance',
    location: 'Remote',
    title: 'Freelance Junior Software Developer',
    date: 'Sep. 2022 — Dec. 2022',
    description: [
      'Worked as a freelance assistant software developer focused on optimizing software reliability and enhancing user experience',
      'Contributed to feature development, code review, debugging, and technical documentation',
    ]
  },
  {
    company: 'University of Michigan',
    location: 'Ann Arbor, MI',
    title: 'STEM Tutor',
    date: 'Sep. 2019 — Jun. 2023',
    description: [
      'Provided over 200 hours of personalized tutoring per academic semester to students in computer science, mathematics, and statistics',
      'Scheduled and led weekly 4 - hour sessions to reinforce lecture concepts, guide assignment completion, and answer technical questions',
      'Assisted 3 computer science students per term with weekly 2-hour debugging sessions, improving code readability and programming confidence',
      'Created tailored lesson plans to match each student\'s academic needs and skill levels',
    ]
  },
];
</script>