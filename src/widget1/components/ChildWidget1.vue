<template>
    <div>
        <h1>this is child widget 1</h1>
        <div>
            <label>My Custom Input</label>
            <input type="text" placeholder="Custom input!" @helo="handleChange" />
        </div>
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
    name: 'ChildWidget1',
    methods: {
        handleChange(event)
        {
            this.$emit("customChange", event.target.value.toUpperCase())
        }
    }
}
</script>