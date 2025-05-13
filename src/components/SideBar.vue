<template>
<aside class="sidebar" data-sidebar>
  <div class="sidebar-info">

    <figure class="avatar-box">
      <img src="./assets/images/my-avatar.png" alt="Richard hanrick" width="80">
    </figure>

    <div class="info-content">
      <h1 class="name" title="Richard hanrick">Kenny Ngo</h1>
      <p class="title">Software Engineer</p>
    </div>

    <button class="info_more-btn" data-sidebar-btn>
      <span>Show Contacts</span>
      <ion-icon name="chevron-down"></ion-icon>
    </button>

  </div>

  <div class="sidebar-info_more">
    <div class="separator"></div>
    <ul class="contacts-list">
      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="location-outline"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">Location</p>
          <address>Grand Rapids Michigan, USA</address>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">Email</p>
          <a href="mailto:kennyngodev@gmail.com" target="_blank"
            class="contact-link text-hover-orange-yellow-crayola">kennyngodev@gmail.com</a>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="logo-github"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">Github</p>
          <a href="https://www.github.com/kennyhngo" target="_blank"
            class="contact-link text-hover-orange-yellow-crayola">kennyhngo</a>
        </div>
      </li>

      <li class="contact-item">
        <div class="icon-box">
          <ion-icon name="mail-outline"></ion-icon>
        </div>
        <div class="contact-info">
          <p class="contact-title">LinkedIn</p>
          <a href="https://www.linkedin.com/in/khngo" target="_blank"
            class="contact-link text-hover-orange-yellow-crayola">Kenny Ngo</a>
        </div>
      </li>
    </ul>
  </div>
</aside>
</template>
