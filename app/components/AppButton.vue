<template>
  <div>
    <p v-show='clicked'>clicked</p>
    <button type="button" @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  date() {
    return {
      clicked: false
    }
  },
  methods: {
    handleClick() {
      this.clicked = true
    }
  }
}
</script>
