<template>
  <div>
    <div class="portfolio-page">
      <h1 class="portfolio-header"> about me </h1>
    </div>

     <div class = "about-container">
       <div class = "about-words"> <p class= "words">Hello! My name is Dallin Reber, and I am the face behind
       <em>clay by dallin</em>. It all started with a lump of clay and a love for adventure-- trying to use my life and experiences to
       inspire my art..</p>
       </div>
       <div><img class='about-photo' src='images/IMG_0109.JPG' style='width: 400px;'/></div>
     </div>

     <div class = "about-container">
       <div><img class='about-photo' src='images/IMG_0870.JPG' style='width: 400px;'/></div>
       <div class = "about-words"> <p class= "words"> I started studying ceramic art in highschool, and while I certainly was no prodigy,
         I immediately fell in love. I took the class as many times as I could during the school year, and during the summer months I maintained
         a membership at a local studio. I wanted to learn everything I could about pottery.</p>
       </div>
     </div>

     <div class = "about-container">
       <div class = "about-words"> <p class= "words">After graduating, I had some important decisions to make. Was pottery really going to be able
       to support the kind of lifestyle I wanted? Would I be able to make enough money to pay rent? Unfortunately, I decided that pottery was
       probably something that I should only do as a hobby, so I stopped creating. This story, however, has a happy ending! After several years of doing pottery
       off and on, I realized that I wasn't ever going to be able to quit. I spoke with some mentors and dear friends of mine, and I got the courage I needed to
     take my artwork to the next step. I know work as an instructor and a studio here in northern Utah, and I'm loving every minute of it. I still have the ability to
     work on my own pieces, while sharing this part of me with others.</p>
       </div>
       <div><img class='about-photo' src='images/IMG_5419.JPG' style='width: 400px;'/></div>

     </div>

     <div class="flourish-container">
       <div class="flourish-item"><p class="flourish-font"> i i i </p></div>
     </div>

  </div>
</template>

<style>

.about-container{
  background-color: #f5fffd;  /* Blue */
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  /* width: 900px; */
  justify-content: space-around;
  /* border: 1px solid red; */
}

.about-words{
  background-color: #f5fffd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  padding: 20px;
}

.about-photo{
  justify-content: center;
  border: 5px solid #f0e3c2;
}

.words{
  font-size: 20px;
  font-family: "Dual300", sans-serif;
  text-align: center;
  padding-left: 20px;
}

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

</style>
