<template>
    <section class="hero is-fullheight fill">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-8 is-variable is-vcentered">
                    <div class="column is-7 has-text-centered">
                        <h1 class="is-size-4 has-text-info">
                            Log In to Samaritan
                        </h1>
                        <p class="is-size-3 has-text-weight-bold is-color-primary">
                            Criminal Tracking and Detection, Made Easy.
                        </p>
                        <figure class="image is-3by2">
                            <img src="../static/image/surveillance.svg" />
                        </figure>
                    </div>
                    <div class="column is-5 has-text-left">
                        <div class="container is-vcentered">
                            <div class="field">
                                <p
                                    class="control has-icons-left has-icons-right"
                                >
                                    <input
                                        class="input is-medium"
                                        v-model="email"
                                        type="email"
                                        placeholder="Enter your email ID 😄"
                                    />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control has-icons-left">
                                    <input
                                        class="input is-medium"
                                        v-model="password"
                                        type="password"
                                        placeholder="Your super secret password 🔐"
                                    />
                                    <span class="icon is-medium is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control">
                                    <button
                                        class="is-block is-medium is-fullwidth button is-success"
                                        v-on:click="loginUser"
                                    >
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import anime from 'animejs/lib/anime.es.js'
export default {
    data() {
        return {
            email: 'saibalsu@gmail.com',
            password: 'lollollol',
            current: null
        }
    },

    methods: {
        loginUser() {
            this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                }
            })
        }
    }
}
</script>

<style>
.fill {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}
</style>
