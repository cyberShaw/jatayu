<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObjectName"
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <map-modal
    :is-active="isMapModalActive"
    @close="mapClose"
    />
    <b-table
      :checked-rows.sync="checkedRows"
      :checkable="checkable"
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :striped="true"
      :hoverable="true"
      default-sort="name"
      :data="clients"
    >
      <template slot-scope="props">
        <b-table-column class="has-no-head-mobile is-image-cell">
          <div class="image">
            <img :src="props.row.avatar" class="is-rounded">
          </div>
        </b-table-column>
        <b-table-column label="Criminal ID" field="cid" sortable>
          {{ props.row.cid }}
        </b-table-column>
        <b-table-column label="ID" field="id" sortable>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column label="Location - Coordinates" field="location" sortable>
          <div class="modalToggle" @click.prevent="mapOpen()"> {{ props.row.location }} </div>
        </b-table-column>
        <b-table-column class="image is-square" label="Progress" field="progress" sortable>
            <img class="zoom" :src="props.row.rsrc" />
        </b-table-column>
        <b-table-column label="Created">
          <small class="has-text-grey is-abbr-like" :title="props.row.created">{{ props.row.created }}</small>
        </b-table-column>
        <b-table-column custom-key="actions" class="is-actions-cell">
          <div class="buttons is-right">
            <nuxt-link :to="{name:'client-id', params: {id: props.row.id}}" class="button is-small is-primary">
              <b-icon icon="account-edit" size="is-small" />
            </nuxt-link>
            <button class="button is-small is-danger" type="button" @click.prevent="trashModal(props.row)">
              <b-icon icon="trash-can" size="is-small" />
            </button>
          </div>
        </b-table-column>
      </template>

      <section slot="empty" class="section">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large" />
            </p>
            <p>Fetching data...</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large" />
            </p>
            <p>Nothing's here&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import ModalBox from '@/components/ModalBox'
import MapModal from '@/components/MapModal'

export default {
  name: 'DetectionsTable',
  components: { ModalBox, MapModal },
  props: {
    dataUrl: {
      type: String,
      default: false 
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalActive: false,
      isMapModalActive: false,
      trashObject: null,
      clients: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    }
  },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      return null
    }
  },
  mounted () {
    console.log(this.dataUrl)
    if (this.dataUrl) {
      console.log(this.dataUrl)
      this.isLoading = true
      this.$axios
        .get(this.dataUrl)
        .then((r) => {
          // console.log(r.data.detections)
          this.isLoading = false
          if (r.data && r.data.detections) {
            if (r.data.detections.length > this.perPage) {
              this.paginated = true
            }
            this.clients = r.data.detections
            // console.log(this.clients)
          }
        })
        .catch((e) => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger'
          })
        })
    }
  },
  methods: {
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    mapOpen () {
      this.isMapModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false
      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    },
    mapClose () {
      this.isMapModalActive = false
    }
  }
}
</script>