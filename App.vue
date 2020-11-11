<template>
  <form class="form" @submit.prevent="submit">
    <my-input name="Username"
      :rules="{required: true, min: 5}"
      inputType="text"
      :value="username.value" 
      @update="update"
    />
     <my-input name="Password"
      :rules="{required: true, min: 10}"
      inputType="password"
      :value="password.value"
      @update="update"

    />
    <my-button 
      color="white"
      background="darkslateblue"
      :isDisabled="!valid"
    />
  </form>
  
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'
export default {
  components: {
    MyButton,
    MyInput,
  },
  data () {
    return {
      username: {
        value: '',
        valid: false
      },
      password: {
        value: '',
        valid: false,
      }
    }
  },
  computed: {
    valid () {
      return this.username.valid && this.password.valid
    }
  },
  methods: {
    update (payload) {
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid
      }
    },
    submit ($evt) {

    }
  }
}
</script>

<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  .form {
    max-width: 400px;
    width: 50%;
    margin: 10px 20px;
  }
</style>