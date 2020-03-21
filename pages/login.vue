<template>
    <div class="hero is-fullheight">
        <div class="columns">
            <div class="column is-4 banner">
                <h1 class="is-size-1 has-text-centered">Login</h1>
                <p class="content has-text-centered is-size-5 is-hidden-mobile">
                    Welcome to the Wire 🔥
                </p>
            </div>
            <div class="column form">
                <label class="label">
                    Enter your credentials 😄
                </label>

                <div class="field">
                    <div class="control">
                        <input class="input" type="text" placeholder="Email 📧" v-model="email">
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input class="input" type="password" placeholder="Password 🔑" v-model="password">
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button icon-left="lock-open-outline" class="button is-link is-light is-rounded" :class="{ 'is-loading': signIn }" @click="login">
                            Login  
                        </button>
                    </div>
                    <div class="control float-right">
                        <nuxt-link to="/reset" class="button is-light is-danger is-outlined is-rounded">Forgot Password</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { fireAuth } from '@/services/firebase'

    export default {
        data() {
            return {
                email: '',
                password: '',
                signIn: false,
                forgot: false,
                err: null
            }
        },
        methods: {
            login() {
                this.signIn = true
                fireAuth.signInWithEmailAndPassword(this.email, this.password)
                    .then(data => {
                        console.log('Signed In!')
                        this.$router.push('/dashboard')
                    })
                    .catch(err => {
                        this.err = err
                        console.log(err)
                    })
            }
        }     
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .banner {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>