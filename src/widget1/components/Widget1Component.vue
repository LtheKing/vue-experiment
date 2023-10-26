<template>
    <div>
        <h1>Widget 1 Token : {{ token }}</h1>
        <!-- <p class="testingp">testing css</p>
        <p class="subs">testing substyle</p> -->
        <!-- <img src="../../assets/img/speda.png" /> -->
        <!-- <ChildWidget1 /> -->
        <button @click="sendEvent">Call Heroes</button>
    </div>
</template>

<style>
    .testingp {
        color: red;
        font-family: 'Alumni Sans Collegiate One', sans-serif;
    }
</style>

<script>
// import ChildWidget1 from "./ChildWidget1.vue"
import api from "../api";
import NProgress from "nprogress";

export default {
    props: [
        "token"
    ],
    setup(props, context) {
        function sendEvent()
        {
            context.emit('callHeroes', 'Aldi')
        }

        function callHeroes(hero) {
            alert(`Calling ${hero}`)
        }

        return {
            sendEvent,
            callHeroes
        }
    },
    mounted() {
        // this.test1();
        api.testApi();
    }, 
    created() {
        // this.test1();
        this.$axios.interceptors.request.use(
            (config) =>
            {
                NProgress.start();
                console.log("nprogress request start");
                // trigger 'loading=true' event here
                return config;
            },
            (error) =>
            {
                NProgress.done();
                console.log("nprogress request error");
                // trigger 'loading=false' event here
                return Promise.reject(error);
            }
        );

        this.$axios.interceptors.response.use(
            (response) =>
            {
                NProgress.done();
                // trigger 'loading=false' event here
                console.log("nprogress response start");
                this.IsUnauthorizeError = false;
                return response;
            },
            (error) =>
            {
                NProgress.done();
                console.log("nprogress response error");
                if (401 === error.response.status)
                {
                    this.IsUnauthorizeError = true;
                }
                return Promise.reject(error);
            }
        );
    },
    methods: {
        async test1() {
            const headers = { "Content-Type": "application/json"};
            const response = await this.$axios.get("https://jsonplaceholder.typicode.com/users", { headers });
            const data = response.data;
            console.log(data);
            return data;
        }
    }
}
</script>
