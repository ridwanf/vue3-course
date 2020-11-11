<template>
  <div class="input-wrapper">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input :type="inputType" :id="name" :value="value" @input="input">
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: {
      type : Object,
    },
    inputType: {
      type: String
    },
    value: {
      type: String,
    }
  },
  computed: {
    error() {
      return this.validate(this.value)
    }
  },
  methods: {
    input($evt) {
      this.$emit('update', {
        value: $evt.target.value, 
        name: this.name,
        valid: this.validate($evt.target.value) ? false : true
        } 
      )
    },
    validate (value) {
      if (this.rules.required && !value) {
        return "Required"
      }
      if(this.rules.min && value.length < this.rules.min) {
        return `Minimum length is ${this.rules.min}`
      }
    }
  }
}
</script>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .label {
    display: flex;
    justify-content: space-between;
  }
  .error {
    color: red;
  }
  input {
    background: none;
    color: black;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    font-size: 16px;
  }
</style>