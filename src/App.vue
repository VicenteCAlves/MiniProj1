<template>
   <div id="nav">
    <router-link to="/"><img src="./assets/home-svgrepo-com.svg" width="12" height="12"> Inicio</router-link>
    <router-link to="/sou">Quem sou eu</router-link>
    <router-link to="/faco">O que faço</router-link>
    <router-link to="/hobbie">Os meus Hobbies</router-link>
  </div>
  <router-view />
  
  <div id="social">
    <a href="https://www.facebook.com/vicente.alves.980"><img src="./assets/facebook-svgrepo-com.svg" ></a>
    <a href="https://www.instagram.com/vicente.alves.980"><img src="./assets/instagram-svgrepo-com.svg" ></a>
    <a href="https://www.linkedin.com"><img src="./assets/linkedin-svgrepo-com.svg" ></a>
    <a href="https://www.twitter.com"><img src="./assets/twitter-svgrepo-com.svg" ></a>
    <a href="https://www.youtube.com"><img src="./assets/youtube-svgrepo-com.svg" ></a>
  </div>
</template>

<style>
  body{
    background-image: url('./assets/lagoafurnas.jpg');
    background-size: cover;
  }

  #social {
    position: absolute;
    display: block;
    /*background-color: blue;*/
    top: 450px;
    width: 99%;
  }

  #social img {
    padding: 5px;
    width: 50;
    height: 50px;
  }
  
  #social img:hover {
    background-color: chartreuse;
    width: 55px;
    height: 55px;
  }


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    padding: 5px;
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a:hover {
    padding: 5px;
    background-color: greenyellow;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
