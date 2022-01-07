<template>
    <div>
    <br>
    <br>
    <br>
    <b-img id="img" :src="require('../assets/Oral Fixation.png')"></b-img>
    <br><br>
    <br>
    <form id="inputBar">
      <b-form-input v-model="email" type="email" placeholder="Enter a valid email address"/>

      <br />
      <b-form-input v-model="password" type="password" placeholder="Enter password" />
      <br>
      <b-button variant="outline-light" id="btn" v-on:click="signup" type="button" size="lg">signup</b-button>

    </form>
  </div>
</template>

<script>
import { Api } from '@/Api'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      console.log(this.email)
      Api.post('/users/signup', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
          if (response.status === 200) {
            window.location = '/#/login'
          }
        }).catch(function (error) {
          if (error.response.status === 400) {
            alert(error.response.data)
          }
        })
    }
  }

}
</script>

<style scoped>
#header {
  color: white;
}
#img {
  width: 70%;
}
#inputBar {
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 2%;
}
#btn {
  width: 60%;
  color: white;

}
</style>
