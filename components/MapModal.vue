<template>
  <b-modal :active.sync="isMapModalActive" has-modal-card>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Confirm action
        </p>
      </header>
      <section class="modal-card-body">
        <p>This will permanently delete <b>{{ trashObjectName }}</b></p>
        <p>Action can not be undone.</p>
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
      default: false
    }
  },
  data () {
    return {
      isMapModalActive: false
    }
  },
  watch: {
    isActive (newValue) {
      this.isMapModalActive = newValue
    },
    isMapModalActive (newValue) {
      if (!newValue) {
        this.close()
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>