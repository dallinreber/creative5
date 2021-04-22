<template>
  <div>


  <div class="logoutbutton">
    <div class="button-container">
      <div class="button-for-logout"> <p class="button-words"><a @click="logout"> logout </a></p> </div>
    </div>
  </div>

    <!-- <div class="logoutbutton"><a @click="logout">logout</a></div> -->
    <!-- UPLOAD GRAPHIC NEEDED -->
    <p class="titles">My Orders</p>

    <div class="words">
      <myOrders v-if="user" :orders='customPieces'/>
      <login v-else />
    </div>

  </div>
</template>

<script>
import axios from 'axios'
//import customUpload from '@/components/custom-form.vue'
import login from '@/components/login.vue'
import myOrders from '@/components/my-orders.vue'

export default {
name: 'my-orders',
components: {
  login,
  myOrders,
  // Login
},
data () {
  return {
    show: false,
    customPieces: Array
  }
},
async created () {
  this.getUser()
  this.getCustomPieces()
},
computed: {
  user () {
    return this.$root.$data.user
  }
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
      //console.log(customPiecesResponse)
      this.customPieces = customPiecesResponse.data
    } catch (error) {
      this.customPieces = []
    }

  }
}
}
</script>

<style>
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

.logoutbutton {
  font-family: "LemonTuesday", sans-serif;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  padding-right: 30px;
  /* width: 100px; */

}

.button-for-logout {
  width: 150px;
  padding: 10px;
  border: none;
  background-color: #cef0e9;
/* border: 5px solid #f0e3c2; */
/* color: white; */
padding: 15px 32px;
text-align: center;
justify-content: center;
width: 150px;
text-decoration: none;
display: flex;
font-size: 24px;
}
</style>
