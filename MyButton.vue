<template>
  <button :style="{'color': color, 'background': background}"
    :class="{ 'disabled-button': isDisabled}"
    :disabled="isDisabled"
  >
    Button
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    background: {
      type: String,
      default: 'white'
    },
    isDisabled: {
      type: Boolean,
    }
  },
}
</script>

<style scoped>
  button {
    background: none;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px 40px;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover{
    filter: brightness(125%);
  }
  button.disabled-button {
    opacity: .5;
  }
</style>