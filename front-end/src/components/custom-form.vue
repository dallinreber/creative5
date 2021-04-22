<template>
  <transition v-if="show" name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <form class="pure-form" @submit.prevent="submit">
          <legend class="custom-header">submit a custom order request</legend>
          <fieldset>
            <p class="custom-text">name</p>
            <input v-model="name" placeholder="name">
          </fieldset>
          <fieldset>
            <p class="custom-text">email address</p>
            <input v-model="email" placeholder="email">
          </fieldset>
          <fieldset>
            <p class="custom-text">choose a base form</p>
            <input v-model="form" placeholder="form (mug, vase, cup, etc.)">
          </fieldset>
          <fieldset>
            <p class="custom-text">animal or subject of piece</p>
            <input v-model="subject" placeholder="subject">
          </fieldset>
          <fieldset>
            <p class="custom-text">choose a color</p>
            <textarea v-model="color" placeholder="color (white, deep ocean, or frosted blue. other colors may increase cost)"></textarea>
          </fieldset>
          <fieldset>
            <p class="custom-text">pick some add-ons</p>
            <textarea v-model="addons" placeholder="add-ons (coral, flowers, etc.)"></textarea>
          </fieldset>
          <fieldset>
            <p class="custom-text">describe your piece</p>
            <textarea v-model="description" placeholder="description"></textarea>
          </fieldset>
          <fieldset>
            <div class="imageInput" @click="chooseImage">
              <img v-if="url" :src="url" />
              <div v-if="!url" class="placeholder">
                please include a reference image
              </div>
              <input class="fileInput" ref="fileInput" type="file" name="CustomOrder" @input="fileChanged">
            </div>
            <p v-if="error" class="error">{{error}}</p>
          </fieldset>
          <fieldset class="buttons">
            <button type="button" @click="close" class="pure-button">Close</button>
            <button type="submit" class="pure-button pure-button-primary right">submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
  name: 'customUpload',
  props: {
    show: Boolean
  },
  data () {
    return {
      name: '',
      email: '',
      form: '',
      subject: '',
      description: '',
      color: '',
      addons: '',
      url: '',
      file: null,
      error: ''
    }
  },
  methods: {
    fileChanged (event) {
      this.file = event.target.files[0]
      this.url = URL.createObjectURL(this.file)
    },
    close () {
      this.$emit('close')
    },
    chooseImage () {
      this.$refs.fileInput.click()
    },
    async submit () {
      try {
        const formData = new FormData()
        formData.append('CustomOrder', this.file, this.file.name)
        formData.append('name', this.name)
        formData.append('email', this.email)
        formData.append('form', this.form)
        formData.append('subject', this.subject)
        formData.append('description', this.description)
        formData.append('color', this.color)
        formData.append('addons', this.addons)
        await axios.post('/api/customOrders', formData)
        this.file = null
        this.name = ''
        this.email = ''
        this.form = ''
        this.url = ''
        this.subject = ''
        this.description = ''
        this.color = ''
        this.addons = ''
        this.$emit('uploadFinished')
      } catch (error) {
        this.error = 'Error: ' + error.response.data.message
      }
    }
  }
}
</script>

<style scoped>
.custom-header {
  font-family: "LemonTuesday", sans-serif;
  display: flex;
  justify-content: center;
}

.custom-text {
  font-family: "Dual300", sans-serif;
  display: flex;
  justify-content: center;
}
.space-above {
  margin-top: 50px;
}

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.hero {
  padding: 120px;
  display: flex;
  justify-content: center;
}

.heroBox {
  text-align: center;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  transition: opacity 0.5s ease;
  display: flex;
  transition: background 0.2s ease-in-out, height 1s ease-in-out;
  transition: height 0.2s ease-in-out, width 0.2s ease-in-out;
  justify-content: center;
  transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);
}

.modal-container {
  width: 50%;
  height: max-content;
  margin-top: 80px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all 0.5s ease;
}

/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Form */

form {
  font-size: 11pt;
}

input {
  width: 100%;
}

textarea {
  width: 100%;
  height: 30px;
}

.placeholder {
  background: #F0F0F0;
  width: 200px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.placeholder:hover {
  background: #E0E0E0;
}

.fileInput {
  display: none;
}

img {
  width: 200px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
