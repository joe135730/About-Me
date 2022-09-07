<template>
    <div class="main xl:flex">
      <div id="leftNavbar" class="flex flex-col items-center">
        <div class="photo">
          <img class="photo" src="../assets/photo.png" alt="" />
        </div>
        <h1 class="sm:text-7xl text-6xl">Che-Yi Wu</h1>
        <div class="infoList text-center">
          <ul class="flex flex-col items-center sm:text-xl">
            <li v-for="list in infoList" :key="list">
              {{ list }}
            </li>
            <li><a href="https://www.preciser.io/" target="_blank">https://www.preciser.io/</a></li>
          </ul>
        </div>
        <div class="socialMedia">
          <ul class="flex justify-center">
            <li>
              <a href="https://www.linkedin.com/in/che-yi-wu/" target="_blank">
                <img src="../assets/linkedin.png" alt="linkedin" width="50" />
              </a>
            </li>
            <a href="https://www.instagram.com/joe135730/" target="_blank">
              <img src="../assets/instagram.png" alt="instagram" width="50" />
            </a>
          </ul>
        </div>
      </div>
      <div id="rightMain" class="xl:max-w-4xl">
        <div class="top">
          <div class="topNav sm:text-2xl">
            <ul class="flex justify-center">
              <!-- router -->
              <li>
                <router-link to="/Home">Home</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/pages">Pages</router-link>
              </li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <!-- <div class="animationNavbar">
                      <img src="../assets/carousel-1.jpg" alt="image">
                  </div> -->
        </div>
        <div class="content">
          <router-view></router-view>
          <div class="footer text-center">
            <p>
              &copy;Che-Yi Wu. All Rights Reserved. Developed by Vite, tailwindcss
            </p>
            <p>
              Reference:<br />
              <a href="https://htmlcodex.com/" target="_blank">HTML Codex</a
              >,<br />
              <a
                href="https://www.flaticon.com/free-icons/linkedin"
                title="linkedin icons"
                target="_blank"
                >Linkedin icons created by riajulislam - Flaticon</a
              ><br />
              <a
                href="https://www.flaticon.com/free-icons/instagram"
                title="instagram icons"
                target="_blank"
                >Instagram icons created by Freepik - Flaticon</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  <!-- <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a> -->
  <!-- <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a> -->
  <script setup>
  const infoList = [
    "Arizona State University",
    "Balchelor of Science:",
    "Computer Information Systems,",
    "Marketing",
    "(Digital and Integrated Marketing Communications)",
    "Certificate:",
    "ASU-Digital Business Innovation,",
    "Coursera-Technical Support Fundamentals,",
    "NSE 1 Network Security Associate",
    "Preciser",
    "Frontend Engineer",
  ];
  </script>
  
  <style scoped>
  .main {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
  }
  .photo {
    @apply inline-block w-40
          rounded-full ring-2 ring-white;
  }
  #leftNavbar {
    padding: 30px;
    background-color: white;
  }
  @media screen and (min-width: 1280px) {
    #leftNavbar {
      left: 0;
      position: fixed;
      margin-left: 100px;
      height: 940px;
      min-width: 490px;
    }
    #rightMain {
      margin-left: 680px;
      max-width: 896px;
      width: 100%;
    }
  }
  h1 {
    /* font-size:70px; */
    color: #202c45;
  }
  /* .infoList li{
      font-size: 20px;
  } */
  .infoList li:nth-child(1),
  .infoList li:nth-child(5),
  .infoList li:nth-child(9) {
    margin-bottom: 10px;
  }
  .infoList li:nth-child(1),
  .infoList li:nth-child(2),
  .infoList li:nth-child(6),
  .infoList li:nth-child(10) {
    font-weight: bold;
  }
  ul {
    list-style: none;
  }
  .socialMedia{
    margin-top:auto;
  }
  .socialMedia li {
    margin-right: 10px;
  }
  #rightMain {
    background-color: white;
    margin-bottom: 50px;
    /* max-width: 900px; */
  }
  .topNav {
    background-color: #202c45;
    color: white;
    /* font-size: 25px; */
    padding: 10px 0;
  }
  .topNav li {
    margin-right: 20px;
  }
  .router-link-active {
    color: blue;
  }
  /* .blog{
      margin:48px 15px 30px 50px;
  } */
  .footer {
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    color: white;
    background-color: #202c45;
    clear:both;
  }
  </style>