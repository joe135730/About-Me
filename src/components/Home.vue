<template>
    <div class="blog sm:text-base">
      <ul>
        <li class="flex" v-for="item in mainContent" :key="item">
          <div class="image">
            <img :src="item.image" alt="image" />
          </div>
          <div class="flex-wrap">
            <p class="font-bold" style="font-size: 20px; color: #202c45">
              {{ item.title }}
            </p>
            <br />
            <p class="font-bold" v-html="item.link1" style="color: red"></p>
            <p>{{ item.content1 }}</p>
            <p class="font-bold" v-html="item.link2" style="color: red"></p>
            <p>{{ item.content2 }}</p>
          </div>
        </li>
      </ul>
      <div>
        <p>
          Course description from
          <a href="https://webapp4.asu.edu/catalog/courselist" target="_blank"
            >ASU-Course Catalog Search</a
          >
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import java from "../assets/java.jpg";
  import python from "../assets/python.png";
  import cPlusPlus from "../assets/c++.png";
  import webLanguage from "../assets/web.jpeg";
  const mainContent = [
    {
      title: "Taken Course(s)",
      image: java,
      link1:
        "<a href='https://webapp4.asu.edu/catalog/courselist?s=CIS&n=340&t=2211&hon=F&gg=F' target='_blank'>CIS 340</a>",
      content1:
        "Systems Development Life Cycle (SDLC) tools, techniques, and methodologies used to plan and analyze the needs of modern business information system development.",
      link2:
        "<a href='https://webapp4.asu.edu/catalog/courselist?s=CSE&n=110&t=2221&hon=F&gg=F' target='_blank'>CSE 110</a>",
      content2:
        "Concepts of problem solving using an object-oriented programming language, algorithm design, structured programming, fundamental algorithms and techniques.",
    },
    {
      title: "Taken Course(s)",
      image: python,
      link1:
        "<a href='https://webapp4.asu.edu/catalog/courselist?s=CIS&n=345&t=2217&hon=F&gg=F' target='_blank'>CIS 345</a>",
      content1:
        "Provides a clear understanding of the Systems Development Life Cycle (SDLC) tools, techniques, and methodologies used to design, implement, and support modern business information systems development.",
    },
    {
      title: "Taken Course(s)",
      image: cPlusPlus,
      link1:
        "<a href='https://webapp4.asu.edu/catalog/courselist?s=CSE&n=100&t=2221&hon=F&gg=F' target='_blank'>CSE 100</a>",
      content1:
        "Principles of problem solving using C++, algorithm design, structured programming, fundamental algorithms and techniques, and computer systems concepts. Social and ethical responsibility.",
    },
    {
      title: "Taken Course(s)",
      image: webLanguage,
      link1:
        "<a href='https://webapp4.asu.edu/catalog/courselist?s=CIS&n=425&t=2217&hon=F&gg=F' target='_blank'>CIS 425</a>",
      content1:
        "Modern Web application technologies for the enterprise. Covers development of Web applications for handling business transactions and strategies including the use of cloud-based applications.",
      link2:
        "<a href='https://webapp4.asu.edu/catalog/courselist?s=CIS&n=430&t=2221&hon=F&gg=F' target='_blank'>CIS 430</a>",
      content2:
        "Mobile application development for the enterprise to address mobile transactions and consumer engagement. Covers business frameworks, app development; and management of devices, applications and services in today's multi-platform environment.",
    },
  ];
  </script>
  <style scoped>
  /* .image{
      width:50%;
  }
  img{
      width:200px;
  } */
  li {
    margin-bottom: 20px;
  }
  p {
    /* font-size:15px; */
    display: inline-block;
  }
  
  li:nth-of-type(1) .image {
    width: 100%;
  }
  li:nth-of-type(2) .image {
    width: 62%;
  }
  li:nth-of-type(3) .image {
    width: 57%;
  }
  li:nth-of-type(4) .image {
    width: 132%;
  }
  </style>