<template>
    <div
      class="
        introduction
        flex
        sm:flex-row
        flex-col
        items-center
        justify-between
        py-28
        px-5
        text-white
      "
    >
      <p class="text-4xl font-bold sm:mb-6">ABOUT ME</p>
      <p class="text-xl font-bold">
        <router-link to="/Home">Home</router-link>/ About Me
      </p>
    </div>
    <div class="article">
      <h1 class="text-4xl font-bold">The Persistent Challenger Who Pursues Dream</h1>
      <div class="mainContent">
          <img class="graduate" src="../assets/graduate-photo.jpg" alt="graduate-photo">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorem delectus ipsam aut earum? Nesciunt, consequuntur. Voluptatibus expedita atque id eaque veniam dolores corrupti non voluptatum cum ducimus, illum ipsum.
          Accusantium unde necessitatibus repellendus, fugiat veniam ipsa! Ullam molestiae explicabo dolore sapiente atque deserunt deleniti corporis facere tempore veniam excepturi laboriosam quia similique, optio dolor? Ea expedita voluptates deleniti sint.
          Eaque, consectetur alias ratione laboriosam ea, praesentium harum sed dolorem, corporis cupiditate aliquam sit ipsum illo blanditiis fugiat rem. Illum aspernatur corrupti deserunt laudantium officiis sapiente. Perspiciatis amet inventore repudiandae?
          Suscipit fugit deleniti commodi nam eligendi necessitatibus, distinctio natus delectus molestias eius sit modi obcaecati dicta, vel quod quia doloremque nisi omnis possimus praesentium porro excepturi ratione quis iusto? Hic.
          Porro eius nulla omnis magni voluptatibus culpa obcaecati eveniet quod, error quis ratione, aperiam dolorum aliquid saepe ad aliquam. Rerum, a. Libero fuga doloribus voluptatum maxime numquam, quas iusto in!
          Veritatis, obcaecati! Neque, in nulla dolore et vel, sunt odit, veritatis voluptas iure nesciunt amet nostrum! Officia ad ex soluta, cumque magnam quos numquam ratione sunt porro reprehenderit nihil repudiandae.</p>
      </div>
    </div>
    <div class="progressBar">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="barColor h-6" style="width: 50%">Database</div>
      </div>
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="barColor h-6" style="width: 60%">Object-oriented Language</div>
      </div>
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="barColor h-6" style="width: 90%">Front-end skills</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
  console.log("key", route.params.key);
  </script>
  
  <style scoped>
  .introduction {
    background-color: #2a4b7c;
  }
  h1{
      color:#202C45;
  }
  .article{
      padding:30px 30px;
  }
  .graduate{
      width:50%;
      float:left;
      margin:0 20px 20px 0;
  }
  .mainContent > p{
      margin-top:30px;
  }
  .progressBar{
    margin:0 30px 30px 30px;
    clear:both;
  }
  .barColor{
    background-color:#2A4B7C;
    color:white;
    text-align: center;
  }
  </style>