<template>
    <div>
        <h1>this is child widget 1</h1>
    </div>
</template>

<style scoped>
h1 {
    color: red;
}
</style>

<script>
import api from "../api";

    export default {
        mounted() {
            const result = api.getUsers();
            console.log(result);
        }
    }
</script>