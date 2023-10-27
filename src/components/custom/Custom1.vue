<template>
    <!-- <h1 class="first">this is {{ msg }}</h1>
    <p class="second">another test</p> -->
    <button @click="emitEvent">Emit Event</button>
</template>

<script>
export default {
    props: ["msg"],
    methods: {
        emitEvent()
        {
            debugger;
            this.$emit('myCustomEvent', 'Event Data');
        }
    }
}

</script>