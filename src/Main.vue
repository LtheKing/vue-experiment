<template>
    this is main
    <button @click="sendEvent">Get Token</button>
</template>

<script>
export default {
    name : 'customMain',
    props : ['getToken'],
    setup(props, context) {
        function sendEvent()
        {
            context.emit('getToken', 'Aldi')
        }

        function getToken(token)
        {
            alert(`Calling ${token}`)
        }

        return {
            sendEvent,
            getToken
        }
    }
}
</script>