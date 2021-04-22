<template>
  <div>
    <div class="portfolio-header">
      <div class="portfolio-page">
        <h1 style="font-size: 75px">Lessons and Availability</h1>
      </div>
    </div>

    <div class="review-container">
      <div class="review-words">
            <h1 class="big-words"> Group Course</h1>
            <p class="words">Clay by Dallin offers a variety of ways for anyone to learning pottery-regardless of experience!
            Our most popular option is the Beginner's Group Course. This course is perfect for anyone with little to
            no experience on the potter's wheel, and each student comes away from this two hour lesson with <em>at least</em>
             one piece of their own making. Whether you're looking for a fun date-night, or just wanting to test the waters before
             committing to private lessons, this is the option for you!</p>
      </div>
      <div>
        <img class='review-photo' src='images/beginnerLesson.JPG' style='width: 300px;'/>
      </div>
    </div>

    <div class="button-container">
      <div class="button"> <p class="button-words"><a href="/book-lesson"> Join a Group Lesson! </a></p> </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="review-container">
      <div class="review-words">
          <h1 class="big-words"> Private Lessons</h1>
          <p class="words"> Not a fan of group lessons? Not a problem! We also offer private lessons with
            none other than Dallin himself! Unlike the group lessons, these private sessions
            are catered to the individual. If you've never touched clay before, we can get you started!
            If you've got a few years under your belt, but are trying to learn a few more tricks--we've got you covered.
            Private lesson availability is determined on a first-come-first-serve basis.</p>
      </div>
      <div>
        <img class='review-photo' src='images/ReileyPottery.JPG' style='width: 300px;'/>
      </div>
    </div>

    <div class="button-container">
      <div class="button"> <p class="button-words"><a href="/book-lesson">Book a Private Session!</a></p> </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>

    <div class="review-container">
      <div class="review-words">
        <p class="big-words"> Advanced Techniques</p>
          <p class="words"> Our last option is our Advanced Technique workshop. This is a short class that takes place every Saturday.
              We cycle through a variety of techniques, with each Saturday focusing on a different skill! Common topics are
              sculpting, glazing, carving, sgraffito, trimming, and handle making. If you've already got some experience and
              are looking for ways to up your pottery game, these classes may be just what you're looking for!</p>
      </div>
      <div>
        <img class='review-photo' src='images/camelPot.JPG' style='width: 300px;'/>
      </div>
    </div>

    <div class="button-container">
      <div class="button"> <p class="button-words"><a href="/book-lesson">Sign-up for Advanced Techniques!</a></p> </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>

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

.review-container{
  background-color: #f5fffd;  /* Blue */
  padding: 20px;
  padding-left: 20px;
  padding-right: 100px;
  display: flex;
  /* width: 900px; */
  justify-content: space-around;
  /* border: 1px solid red; */
}

.review-words{
  background-color: #f5fffd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 850px;
  padding: 20px;
  padding-top: 30px;
  /* border: 1px solid red; */
}

.review-photo{
  /* width: 200px; */
  justify-content: center;
  border: 5px solid #f0e3c2;
  border-radius: 150px;
  /* border: 1px solid red; */
}

.button-container{
  display: flex;
  justify-content: space-around;
  /* border: 5px solid #f0e3c2; */
}

.button{
 background-color: #cef0e9;
 border: 5px solid #f0e3c2;
 /* color: white; */
 padding: 15px 32px;
 text-align: center;
 justify-content: center;
  width: 300px;
 text-decoration: none;
 display: flex;
 font-size: 24px;
}

.button-words{
  font-size: 24px;
  color: black;
  font-family: "LemonTuesday", sans-serif;
  text-align: center;
  justify-content: center;
}

.big-words{
  display: flex;
  font-size: 50px;
  color: black;
  padding-right: 20px;
  font-family: "LemonTuesday", sans-serif;
  text-align: left;
  justify-content: flex-start;
}
</style>
