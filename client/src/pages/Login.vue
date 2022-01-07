<template>
  <div>
    <br>
    <br>
    <br>
    <b-img id="img" :src="require('../assets/Oral Fixation.png')"></b-img>
    <br><br>
    <br>
    <form id="inputBar">
      <b-form-input v-model="email" type="email" placeholder="Email address"/>
        <br>
      <!-- <p>Email is: {{ email }}</p> -->
      <b-form-input v-model="password" type="password" placeholder="Password" />
      <label></label>
      <br>
      <!-- <b-button id="btn" v-on:click="test" type="button" size="lg">Test</b-button> -->
      <b-button id="btn" variant="primary" v-on:click="login" type="button" size="lg">Login</b-button>
      <br>
      <a href='/#/signup'>Sign up here!</a>

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
    login() {
      console.log(this.email)
      Api.post('/users/login', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          if (response.status === 200) {
            window.location = '/#/'
          }
        }).catch(function (error) {
          if (error.response.status === 400) {
            alert(error.response.data)
          }
        })
    },
    test() {
      console.log(this.email)
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
