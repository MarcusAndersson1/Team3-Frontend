<template>
  <div>
    <h1>Login</h1>
    <form>
      <input
        v-model="email"
        type="email"
        placeholder="Enter a valid email address"
      />
      <label>Email address</label>
      <p>Email is: {{ email }}</p>

      <br />
      <input v-model="password" type="password" placeholder="Enter password" />
      <label>Password</label>
      <br>
      <button v-on:click="login" type="button">Login</button>
      <button v-on:click="test" type="button">Test</button>

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
</style>
