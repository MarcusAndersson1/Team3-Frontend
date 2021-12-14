<template>
  <div>
    <br>
    <br>
    <br>
    <b-img id="img" :src="require('../assets/teeth.png')"></b-img>
    <br><br>
    <h1 id="header">Oral Fixation</h1>
    <br>
    <br>
    <form id="inputBar">
      <b-form-input
        v-model="email"
        type="email"
        placeholder="Email address"
      />
      <br>
      <label></label>
      <!-- <p>Email is: {{ email }}</p> -->

      <br />
      <b-form-input v-model="password" type="password" placeholder="Password" />
      <label></label>
      <br>
      <!-- <b-button id="btn" v-on:click="test" type="button" size="lg">Test</b-button> -->
      <b-button id="btn" variant="primary" v-on:click="login" type="button" size="lg">Login</b-button>

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
          } else {
            alert('wrong credentials')
          }
        }).catch(function (error) {
          if (error.response.status === 400) {
            alert('Wrong credentials')
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
  width: 30%;
}
#inputBar {
  margin-right: 30%;
  margin-left: 30%;
}
#btn {
  width: 50%;

}
</style>
