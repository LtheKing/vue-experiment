<template>
  <div>
    <h1>this is App the root</h1>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['msg'],
    mounted() {
      console.log('helo')
    }
  }
</script>

<style scoped>
h1 {
  color: red;
}
</style>