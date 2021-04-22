<template>
<div>
  <section class="image-gallery">
    <div class="image" v-for="order in orders" v-bind:key="order._id">
      <router-link :to="{ name: 'order', params: { id: order._id }}"><img :src="order.path" /></router-link>
      <div class="photoInfo">
        <p class="photoTitle">{{order.title}}</p>
        <p class="photoName">{{order.name}}, {{order.form}}, {{order.subject}}, {{order.color}}, {{order.addons}}</p>
        <p class="photoName"> {{order.description}} </p>
      </div>
      <p class="photoDate">{{formatDate(order.created)}}</p>
    </div>
  </section>
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'myOrders',
  props: {
    orders: Array
  },
  methods: {
    formatDate (date) {
      if (moment(date).diff(Date.now(), 'days') < 15) {
        return moment(date).fromNow()
      } else {
        return moment(date).format('d MMMM YYYY')
      }
    }
  }
}
</script>

<style scoped>
.photoInfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
}

.photoInfo p {
  margin: 0px;
}

.photoDate {
  font-size: 0.7em;
  font-weight: normal;
}

p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>




<!-- <template>
<div class="main">
  <div class="menu">
    <p><a @click="toggleUpload">UPLOAD CUSTOM ORDER REQUEST</a></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout">logout</a></h2>
    <uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
  </div>
  <image-gallery :photos="photos" />
  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios'
import customUpload from '@/components/custom-form.vue'

export default {
  name: 'MyOrders',
  components: {
    customUpload
  },
  data () {
    return {
      show: false,
      orders: [],
      error: ''
    }
  },
  computed: {
    user () {
      return this.$root.$data.user
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    async logout () {
      try {
        await axios.delete('/api/users')
        this.$root.$data.user = null
      } catch (error) {
        this.$root.$data.user = null
      }
    },
    async getOrders () {
      try {
        this.response = await axios.get('/api/customorders')
        this.orders = this.response.data
      } catch (error) {
        this.error = error.response.data.message
      }
    },
    close () {
      this.show = false
    },
    toggleUpload () {
      this.show = true
    },
    async uploadFinished () {
      this.show = false
      this.getOrders()
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}
</style> -->
