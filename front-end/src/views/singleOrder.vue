<template>
  <div>
    <div v-if='!order.notExists'>
    <div class='imageHolder'>
     <img class='image' :src="order.path" />
   </div>
   <!-- <div class="photoInfo">
      <p class="photoTitle"> {{order.title}} </p>
      <p class="photoName">{{order.firstName}} {{order.lastName}}</p>
    </div> -->
    <div class="photoInfo">
      <p class="photoDescription">FORM: {{order.form}}, SUBJECT: {{order.subject}}, COLOR: {{order.color}}, ADD-ONS: {{order.addons}}, DESCRIPTION: {{order.description}}</p>
    </div>
    <div class="photoInfo">
      <p class="photoDate">{{formatDate(order.created)}}</p>
    </div>
    <form v-if='user'>
        <legend>Would you like to make some changes?</legend>
        <fieldset>
          <textarea v-model="order.form" placeholder="form"></textarea>
        </fieldset>
        <fieldset>
          <textarea v-model="order.subject" placeholder="subject"></textarea>
        </fieldset>
        <fieldset>
          <textarea v-model='order.color' placeholder="color"></textarea>
        </fieldset>
        <fieldset>
          <textarea v-model="order.addons" placeholder="add-ons"></textarea>
        </fieldset>
        <fieldset>
          <textarea v-model="order.description" placeholder="additional details"></textarea>
        </fieldset>
        <br>
        <div class='button-container'>
          <fieldset class="buttons">
            <button type="submit" @click="submitChanges()">submit changes</button>
          </fieldset>
        </div>
      <br>
        <div class='button-container'>
          <fieldset class="buttons">
            <button type="delete" @click="deleteOrder()">delete order</button>
          </fieldset>
        </div>
      </form>

    </div>
    <div v-else><h1> Your order has been deleted!</h1></div>
  </div>
</template>

<script>
  import moment from 'moment'
  import axios from 'axios'

  export default {
    name: 'Order',

    data () {
      return {
        order: {notExists: true, path: 'TEST', title: 'TEST', firstName: 'TEST', lastName: 'TEST', form: 'TEST', color: 'TEST', addons: 'TEST', description: 'TEST', created: 'TEST'},
      }
    },
    async created () {
    try {
      const response = await axios.get('/api/users')
      this.$root.$data.user = response.data.user
    } catch (error) {
      this.$root.$data.user = null
    }
    this.getOrder()
    // this.getComments()
  },
  computed: {
    user () {
      return this.$root.$data.user
    }
  },
  methods: {
    formatDate (date) {
      if (moment(date).diff(Date.now(), 'days') < 15) {
        return moment(date).fromNow()
      } else {
        return moment(date).format('d MMMM YYYY')
      }
    },

    async getOrder () {
    try {
      const url = '/api/customOrders/' + this.$route.params.id
      const response = await axios.get(url)
      this.order = response.data
      } catch (error) {
      this.error = error.response.data.message
      }
    },

    async submitChanges () {
      try{
      const url = '/api/customOrders/' + this.$route.params.id
      const response = await axios.put(url, {
        form: this.order.form,
        subject: this.order.subject,
        color: this.order.color,
        addons: this.order.addons,
        description: this.order.description
      })
      this.order = response.data
      } catch (error) {
      this.error = error.response.data.message
      }
    },
    async deleteOrder() {
      try{
      const url = '/api/customOrders/' + this.$route.params.id
      await axios.delete(url)
      // this.$root.$router.push("/")
      } catch (error) {
      this.error = error.response.data.message
      }
    }
  }
}

</script>

<style scoped>

.buttons {
  font-family: "LemonTuesday", sans-serif;
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
  display: flex;
  /* justify-content: space-between; */
}

.button-container{
  display: flex;
  justify-content: center;
}

  .imageHolder{
    display: flex;
    justify-content: center;
  }
  .image{
    width: 250px;
    padding-top: 200px;
  }

  .photoTitle{
    font-weight: bold;
    padding-left: 5px;
    padding-right: 5px;
  }

  .photoInfo{
    display: flex;
    justify-content: center;
  }

  .photoDate{

  }

  .photoName{
    padding-left: 5px;
    padding-right: 5px;
  }

  .photoDescription{
    font-style: italic;
  }

</style>
