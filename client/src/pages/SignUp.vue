<template>
  <div>
    <h1>Signup</h1>
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
      <button v-on:click="signup" type="button">signup</button>

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
          } else {
            alert('wrong credentials')
          }
        })
    }
  }

}
</script>

<style scoped>
</style>
