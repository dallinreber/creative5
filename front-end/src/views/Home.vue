<template>
  <div>
    <div class='header-container'>
    <div class='header'>
      <div class='logo'><h1 class='logo'>clay by dallin</h1></div>
    </div>
  </div>

  <div class = "welcome-container">
    <div class = "welcome-words"> <p class= "home-words">Hello! My name is Dallin, the artist and creator behind Clay by Dallin. I love anything that has to do
    with adventure and clay. All of my work is inspired by the people, places, animals, and experiences I have had both near home and abroad.
    I hope you'll enjoy looking around.</p>
    </div>
    <div class = "welcome-photo"><img src='images/welcometurtle.jpg' style='width: 491px;'/></div>
  </div>


  <div class="flourish-container">
    <div class="flourish-item"><p class="flourish-font"> i i i </p></div>
  </div>

  </div>
</template>

<script>
</script>

<style>
.header-container {
  /* color: #5995DA; */
  background-color: #f5fffd;
  display: flex;
  justify-content: left;
  padding: 20px;
}

.header {
  width: 900px;
  height: 160px;
  display: flex;
  padding-left: 125px;
  justify-content: flex-start;
  /* justify-content: space-between; */
  align-items: flex-end;
  font-family: "LemonTuesday", sans-serif;
}

.logo{
  /* padding: 20px; */
  font-size: 75px;
}

.home-words{
  font-size: 32px;
  color: black;
  font-family: "Dual300", sans-serif;
  text-align: center;
  font-weight: 100;
}


.welcome-container{
  background-color: #f5fffd;  /* Blue */
  padding: 20px;
  padding-bottom: 150px;
  display: flex;
  /* width: 900px; */
  justify-content: space-around;
}

.welcome-words{
  background-color: #f5fffd;
  display: flex;
  justify-content: center;
  width: 500px;
  padding: 20px;

}

.welcome-photo{
  width: 500px;
  justify-content: center;
  border: 5px solid #f0e3c2;
}

</style>
