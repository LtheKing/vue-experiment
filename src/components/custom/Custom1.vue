<template>
    <h1 class="first">this is {{ msg }}</h1>
    <p class="second">another test</p>
</template>

<script>
    export default{
        props : ["msg"]
    }

</script>