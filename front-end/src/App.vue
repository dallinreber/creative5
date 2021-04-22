<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #cef0e9;">
      <a class="navbar-brand" href="#"><h3 class="flourish-font"> g </h3> </a>
      <a class="nav-link" href="/"><h3 class="home-words"> clay by dallin </h3> </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <li class="nav-item active">
            <a class="nav-link" href="/Lab1/index.html">home <span class="sr-only">(current)</span></a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/lessons">lessons</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/shop">shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/custom-orders">custom orders</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">about</a>
          </li>
          <li class="nav-item">
            <h6 style="color: #cef0e9"> padding </h6>
          </li>
          <li v-if='user' class="nav-item">
            <a class="nav-link" href="/loggedIn"> {{user.firstName}} {{user.lastName}} </a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="/Lab1/contact.html">contact</a>
          </li> -->
        </ul>
      </div>
      </nav>
<!-- GITHUB REPOSITORY FOOTER -->
      <footer class="footer">
    <div class="container">
      <a href="https://github.com/BYU-CS-260-Winter-2021/lab-5-photo-bomb-dallinreber.git">Github Respository</a>
    </div>
  </footer>

    </div>
    <router-view/>
  </div>





</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  computed: {
    user () {
      return this.$root.$data.user
    }
  },
  methods: {
    async getLoggedIn () {
      try {
        let response = await axios.get('/api/users')
        this.$root.$data.user = response.data.user
      }
      catch (error){
        this.$root.$data.user = null
      }
    }
  },
  created () {
    this.getLoggedIn();
  }
}
</script>


<style>
body{
  font-family: "Dual300", sans-serif;
}

#app {
  font-family: "Dual300", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  /* font-weight: bold; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: "Sealife";
  src: url("Sealife copy.ttf") format ("truetype");
}

@font-face{
  font-family: 'Shorelines';
  src: url("Shorelines Script Bold copy.otf") format("opentype");
}

@font-face{
  font-family: 'LemonTuesday';
  src: url("Lemon Tuesday copy.otf") format("opentype");
}

@font-face{
  font-family: 'Dual300';
  src: url("dual.300.otf") format("opentype");
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{
  font-weight: 100;
  line-height: .75;
}

.flourish-font{
  padding-top: 25px;
  font-size: 120px;
  font-family: "Sealife", sans-serif;
}

.home-words{
  font-size: 40px;
  color: black;
  /* font-family: "Dual300", sans-serif; */
  text-align: center;
}

</style>
