<template>
  <div>
    <div class="portfolio-page">
      <h1 class="portfolio-header"> Custom Orders </h1>
    </div>
    <div class="words">
      <p class="quotes"> Use the form below to create your own custom piece! Pick from the following shapes,
  add-ons, and colors to create a piece that is truly one of a kind.</p>
    </div>
    <div>
    </div>
    <div>
      <!-- UPLOAD GRAPHIC NEEDED -->

      <div class="button-container">
        <div class="button"> <p class="button-words"><a v-if='user' @click="toggleUpload"> Upload a Custom Order Request</a><a v-else>Please Log In</a></p> </div>
        <customUpload :show="show" @close="close" @uploadFinished="uploadFinished" />
      </div>
      <!-- <p><a v-if='user' @click="toggleUpload">Upload Custom Order Request</a><a v-else>Please Log In</a></p>
      <customUpload :show="show" @close="close" @uploadFinished="uploadFinished" /> -->
    </div>

    <br>
    <br>
    <br>
    <br>

    <div>
      <!-- UPLOAD GRAPHIC NEEDED -->
      <p class="titles">My Orders</p>

      <div class="words">
        <myOrders v-if="user" :orders='customPieces'/>
        <login v-else />
      </div>

    </div>

    <!-- <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br> -->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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

<script>
  import axios from 'axios'
  import customUpload from '@/components/custom-form.vue'
  import login from '@/components/login.vue'
  import myOrders from '@/components/my-orders.vue'
  //import myOrders from '@/components/my-orders.vue'

  export default {
  name: 'custom-orders',
  components: {
    customUpload,
    login,
    myOrders
    // Login
  },
  data () {
    return {
      show: false,
      customPieces: Array
    }
  },

 created () {
    this.getUser()
    this.getCustomPieces()
  },
  computed: {
    user () {
      return this.$root.$data.user
    }
  },
  methods: {
    getPhotos () {
      return this.$root.$data.photo
    },
    close () {
      this.show = false
    },
    toggleUpload () {
    this.show = true
    },
    async uploadFinished () {
      this.show = false
      this.getPhotos()
    },
    async getUser () {
      try {
        const response = await axios.get('/api/users')
        this.$root.$data.user = response.data.user
      } catch (error) {
        this.$root.$data.user = null
      }

    },
    async getCustomPieces () {
      try {
        const customPiecesResponse= await axios.get('/api/customOrders')
        console.log(customPiecesResponse)
        this.customPieces = customPiecesResponse.data
      } catch (error) {
        this.customPieces = []
      }

    }
  }
}
</script>


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

.quotes{
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5fffd;
}

.words{
  font-size: 20px;
  font-family: "Dual300", sans-serif;
  text-align: center;
  padding-left: 20px;
}

.titles{
  font-family: "LemonTuesday", sans-serif;
  display: flex;
  justify-content: center;
  font-size: 75px;
}
</style>
