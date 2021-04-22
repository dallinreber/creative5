<template>
<div>
  <div class="portfolio-page">
   <h1 class="portfolio-header"> portfolio </h1>
 </div>

 <div class="words">
   <p class="quotes"> “Only those who risk going too far can possibly find out how far they can go.” – T.S Eliot </p>
 </div>


  <div class="masonry">
    <div class="item"><img class="image-small" src="images/AnteaterTeapot.JPG"></div>
    <div class="item"><img class="image-small" src="images/BlackSandVase.JPG"></div>
    <div class="item"><img class="image-small" src="images/DolphinPod.jpg"></div>
    <div class="item"><img class="image-small" src="images/camelPot.JPG"></div>
    <div class="item"><img class="image-small" src="images/CoconutCups.JPG"></div>
    <div class="item"><img class="image-small" src="images/DolphinMug.JPG"></div>
    <div class="item"><img class="image-small" src="images/DrippyCup.JPG"></div>
    <div class="item"><img class="image-small" src="images/ElephantCupSet.JPG"></div>
    <div class="item"><img class="image-small" src="images/ElephantMug.JPG"></div>
    <div class="item"><img class="image-small" src="images/ElephantPot.JPG"></div>
    <div class="item"><img class="image-small" src="images/ElephantSpoonRest.JPG"></div>
    <div class="item"><img class="image-small" src="images/FloraBulbVase.JPG"></div>
    <div class="item"><img class="image-small" src="images/GeodeMug.JPG"></div>
    <div class="item"><img class="image-small" src="images/MarbledVase.JPG"></div>
    <div class="item"><img class="image-small" src="images/NativityMug1.JPG"></div>
    <div class="item"><img class="image-small" src="images/Octomug1.JPG"></div>
    <div class="item"><img class="image-small" src="images/PurpleGeodeMug.JPG"></div>
    <div class="item"><img class="image-small" src="images/SnowflakeMug.JPG"></div>
  </div>

  <div class="flourish-container">
  <div class="flourish-item"><p class="flourish-font"> i i i </p></div>
</div>
</div>
</template>

<style>
.portfolio-page{
  font-family: "LemonTuesday", sans-serif;
  display: flex;
  justify-content: center;
  font-size: 150px;
}

.portfolio-header{
  font-size: 100px;
  padding: 35px;
  padding-bottom: 60px;
}

.words{
  font-size: 20px;
  font-family: "Dual300", sans-serif;
  text-align: center;
  padding-left: 20px;
}

.masonry { /* Masonry container */
  column-count: 3;
  column-gap: 1em;
  justify-content: flex-end;
}

.quotes{
  padding-bottom: 40px;
}

.item { /* Masonry bricks or child elements */
  background-color: #f5fffd;
  display: inline-flex;
  justify-content: center;
  margin: 0 0 1em;
  width: 100%;

}

.image-small{
  width: 400px;
}

.flourish-container{
  display: flex;
  padding: 100px;
  flex-direction: row;
  justify-content: center;
}


</style>
