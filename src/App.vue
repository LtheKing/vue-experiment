<template>
  <div>
    <h1 class="appTitle">this is App the root</h1>
    <CustomMain />
  </div>
</template>

<style>
.appTitle {
  color: red;
  font-family: 'Alumni Sans Collegiate One', sans-serif;
}
</style>

<script>
import CustomMain from "./Main.vue";

export default {
  components: {CustomMain},
  name: 'app',
  props: ['msg'],
  mounted()
  {
    // this.testAxios();
  },
  methods: {
    async testAxios()
    {
      const headers = { "Content-Type": "application/json" };
      const response = await this.$axios.get("https://jsonplaceholder.typicode.com/users", { headers });
      const data = response.data;
      console.log(data);
      return data;
    }
  }
}
</script>

