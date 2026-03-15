<template>
<section class="timeline" v-for="(experience, endex) in experiences" :key="endex">
  <div class="title-wrapper">
    <div class="icon-box">
      <ion-icon name="desktop-outline"></ion-icon>
    </div>
    <h3 class="h3">{{ experience.type }} Experience</h3>
  </div>

  <ol class="timeline-list">
    <li class="timeline-item" v-for="(exp, index) in experience.experience" :key="index">
      <h4 class="h4 timeline-item-title">
        {{ exp.company }}
        <span>📍 {{ exp.location }}</span>
      </h4>
      <p class="text-orange-yellow-crayola" style="margin-bottom: 0.25rem">
        {{ exp.title }}
        <span class="float-right">🗓️ {{ DateRangeFormatter.format(exp.dates) }}</span>
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
import type { DateRange } from '../../util/date';
import { DateRangeFormatter } from '../../util/date';

type Experience = {
  company: string;
  location: string;
  title: string;
  description?: string[];
  dates: DateRange;
};
type ExperienceList = {
  type: 'Professional' | 'Work'
  experience: Experience[]
};

const relaventExperience: Experience[] = [
  {
    company: 'Masterpiece Flower Company',
    location: 'Byron Center, MI',
    title: 'Admin Software Engineer',
    dates: {
      start: new Date('2026-03-02')
    }
  },
  {
    company: 'Brooksource',
    location: 'Grand Rapids, MI',
    title: 'Software Engineer',
    dates: {
      start: new Date('2025-07-07'),
      end: new Date('2025-10-31')
    },
    description: [
      'Improved data flow between SAP and internal systems by 100% by refining workflows and synchronization logic, eliminating manual intervention previously required to fix stuck or duplicate order records.',
      'Restored missing product images for Instacart by sanitizing invalid URLs, increasing image display success from 0% to 100% and improving merchandising consistency.',
      'Prevented system slowdowns by redesigning the store transfer workflow to release unused records, reducing data lockouts and improving transaction speed across stores.',
      'Improved data reliability across systems by rebuilding product image synchronization, ensuring 100% consistency between internal databases and upstream sources.'
    ]
  },
  {
    company: 'Gordon Food Service',
    location: 'Grand Rapids, MI',
    title: 'Associate Software Engineer',
    dates: {
      start: new Date('2024-09-30'),
      end: new Date('2025-05-02')
    },
    description: [
      'Delivered bug fixes and feature enhancements in ABLProgress, deploying production-ready code through a gated workflow requiring sysadmin and manager approvals',
      'Created Python scripts to automate POS support tasks (SFTP transfers, file generation, templated messages), saving ~5-10 hours / week for the support team',
      'Independently owned resolution of sales loading errors in Toshiba POS logs, modifying production files and coordinating with the sales accounting team',
      'Promoted to Subject Matter Expert in sales loading support, enabling a senior teammate to offload responsibilities and improving team Jira documentation rate',
    ],
  },
  {
    company: 'CareLinc Medical Equipment',
    location: 'Grand Rapids, MI',
    title: 'Junior Developer',
    dates: {
      start: new Date('2024-05-06'),
      end: new Date('2024-09-13')
    },
    description: [
      'Implemented a cross-departmental reporting pipeline using C# and Python, automating 15+ API calls to collect task data, visualize task queue with matplotlib, and distribute targeted updates via SMTP to internal teams and executives',
      'Researched and deployed Gitea to replace ad-hoc file storage with a secure, self-hosted version control system, laying the foundation for collaborative development and internal code governance',
    ]
  },
  {
    company: 'Freelance',
    location: 'Remote',
    title: 'Freelance Junior Software Developer',
    dates: {
      start: new Date('2022-09-05'),
      end: new Date('2022-12-16')
    },
    description: [
      'Worked as a freelance assistant software developer focused on optimizing software reliability and enhancing user experience',
      'Contributed to feature development, code review, debugging, and technical documentation',
    ]
  },
];

const workExperience: Experience[] = [
  {
    company: 'Golden Tiger Kung Fu Academy',
    location: 'Grand Rapids MI',
    title: 'Chinese Martial Arts Youth Instructor',
    dates: {
      start: new Date('2026-01-06')
    },
    description: []
  },
  {
    company: 'University of Michigan',
    location: 'Ann Arbor, MI',
    title: 'STEM Tutor',
    dates: {
      start: new Date('2019-09-03'),
      end: new Date('2023-06-22')
    },
    description: [
      'Provided over 200 hours of personalized tutoring per academic semester to students in computer science, mathematics, and statistics',
      'Scheduled and led weekly 4 - hour sessions to reinforce lecture concepts, guide assignment completion, and answer technical questions',
      'Assisted 3 computer science students per term with weekly 2-hour debugging sessions, improving code readability and programming confidence',
      'Created tailored lesson plans to match each student\'s academic needs and skill levels',
    ]
  },
  {
    company: 'Michigan Dining',
    location: 'Ann Arbor, MI',
    title: 'Dining Room Helper',
    dates: {
      start: new Date('2020-09-20'),
      end: new Date('2022-01-04')
    },
    description: [
      'Delivered excellent student service in a fast-paced dining environment across pre-, mid-, and post-COVID periods',
      'Rotated through diverse roles, including bussing/cleaning tables, restocking self-serve stations, serving students, washing dishes/utensils, and performing closing-time cleaning',
      'Built a strong reputation for fostering positive interactions and promptly resolving student concerns or appropriately escalating them to higher authorities',
      'Demonstrated effective time management and task prioritization to handle multiple responsibilities during peak meal periods'
    ]
  },
  {
    company: 'Amazon Fullfillment Center',
    location: 'Grand Rapids, MI',
    title: 'Warehouse Associate',
    dates: {
      start: new Date('2020-05-18'),
      end: new Date('2020-07-07')
    },
    description: [
      'Efficiently located and fulfilled customer orders in high-volume warehouse settings',
      'Skilled at accurately picking merchandise to complete tickets using provided technology and machinery',
      'Consistently met productivity targets through excellent organization and time management',
      'Maintained adequate inventory levels by stocking, sorting, and replenishing items',
      'Followed safety procedures, including proper loading techniques, PPE usage, and equipment operation',
      'Demonstrated strong communication, collaboration, and record-keeping skills'
    ]
  },
  {
    company: 'Lacks Enterprises Inc.',
    location: 'Grand Rapids, MI',
    title: 'Machine Operator',
    dates: {
      start: new Date('2019-05-04'),
      end: new Date('2019-08-09')
    },
    description: [
      'Processed and inspected high volumes of automotive parts with attention to detail and efficiency',
      'Examined parts from supply crates for defects, ensuring compliance with strict quality standards',
      'Accurately documented and marked defective parts to maintain product integrity',
      'Consistently met or exceeded hourly production targets through effective machine operation',
      'Proactively resupplied part shipments to sustain workflow and support team productivity',
      'Maintained a strong focus on safety by following all PPE and equipment operation protocols',
      'Assisted with unloading excess parts and materials at shift end, organizing paperwork and maintaining a clean workstation'
    ]
  },
  {
    company: 'Wilson Leather',
    location: 'Grand Rapids, MI',
    title: 'Sales Associate',
    dates: {
      start: new Date('2018-08-25'),
      end: new Date('2018-11-07')
    },
    description: [
      'Collaborated with a small team of 3-4 associates and managers to deliver a welcoming and customer-focused in-store experience',
      'Engaged with customers to identify needs and recommend appropriate products, contributing to increased store sales',
      'Built a strong reputation for being approachable and consistently assisting customers in need',
      'Accurately and efficiently processed payments, returns, exchanges, and markdowns to minimize customer wait times',
      'Maintained store presentation by proactively restocking merchandise, organizing displays, and ensuring overall cleanliness and visual appeal'
    ]
  }
];

const experiences: ExperienceList[] = [
  {
    type: 'Professional',
    experience: relaventExperience
  },
  {
    type: 'Work',
    experience: workExperience
  }
]
</script>,
