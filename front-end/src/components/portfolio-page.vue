<template>
  <div>
    <section class="image-gallery">
      <div class="image" v-for="photo in photos" v-bind:key="photo._id">
        <router-link :to="{ name: 'photo', params: { id: photo._id }}"><img :src="photo.path" /></router-link>
        <div class="photoInfo">
          <p class="photoTitle">{{photo.title}}</p>
          <p class="photoName">{{photo.user.firstName}} {{photo.user.lastName}}</p>
        </div>
        <p class="photoDate">{{formatDate(photo.created)}}</p>
      </div>
    </section>
  </div>
</template>
