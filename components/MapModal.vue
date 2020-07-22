<template>
    <b-modal :active.sync="isMapModalActive" has-modal-card>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    Confirm action
                </p>
            </header>
            <section class="modal-card-body">
                
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="close">
                    Close
                </button>
                <!-- <button class="button is-danger" @click="confirm">
          Delete
        </button> -->
            </footer>
        </div>
    </b-modal>
</template>

<script>

export default {
    name: 'MapModal',
    props: {
        isActive: {
            type: Boolean,
            default: false,
            lat: String,
            long: String,
        }
    },
    data() {
        return {
            isMapModalActive: false,
            appID: 'D61fM1aa5daCNGBz7Wn4',
            appCode: 'HOzA_GOo_S8nP-FJAQrqEGj9Hm1t0oFQ0oggq3Qwp5c'
        }
    },
    created() {
    
    },
    mounted() {
        
    },
    watch: {
        isActive(newValue) {
            this.isMapModalActive = newValue
        },
        isMapModalActive(newValue) {
            if (!newValue) {
                this.close()
            }
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>