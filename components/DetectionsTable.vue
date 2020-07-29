<template>
  <div>
    <b-table
      :loading="isLoading"
      :paginated="paginated"
      hasMobileCards
      :striped="isStriped"
      detailed
      detail-key="id"
      :per-page="perPage"
      hoverable
      default-sort="id"
      default-sort-direction="desc"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      :data="clients"
    >
      <template slot-scope="props">
        <b-table-column label="Detection ID" field="id" searchable sortable>
          <template slot="header" slot-scope="{column}">
            <b-tooltip label="Search with the detection ID using the box!" dashed>
              <p class="is-family-monospace">{{ column.label }}</p>
            </b-tooltip>
          </template>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column label="Criminal ID" field="cid" searchable sortable>
          <template slot="header" slot-scope="{column}">
            <b-tooltip label="Search with the Criminal ID using the box!" dashed>
              <p class="is-family-monospace">{{ column.label }}</p>
            </b-tooltip>
          </template>
          <nuxt-link
            :to="{name: 'criminal-cid', params: {cid: props.row.cid}}"
            class="button is-small is-link has-text-weight-bold"
          >{{ props.row.cid }}</nuxt-link>
        </b-table-column>
        <b-table-column label="Location: Coordinates" field="location" sortable centered>
          <template slot="header" slot-scope="{column}">
            <b-tooltip label="Click on the icon at the left to show map!" dashed>
              <p class="is-family-monospace">{{ column.label }}</p>
            </b-tooltip>
          </template>
          {{ props.row.location }}
        </b-table-column>
        <b-table-column class="image is-square" label="Detected Image">
          <template slot="header" slot-scope="{column}">
            <p class="is-family-monospace">{{ column.label }}</p>
          </template>
          <img class="zoom" :src="props.row.rsrc" />
        </b-table-column>
        <b-table-column label="Time Stamp" field="time_stamp" searchable sortable>
          <template slot="header" slot-scope="{column}">
            <b-tooltip label="Search with the timestamp using the box!" dashed>
              <p class="is-family-monospace">{{ column.label }}</p>
            </b-tooltip>
          </template>
          <span class="tag is-link">{{ props.row.time_stamp }}</span>
          <!-- {{ props.row.time_stamp }} -->
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
      <template slot="detail" slot-scope="props">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <Maps :loc="props.row.location" />
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios';
import Maps from '@/components/Maps';

export default {
  name: 'DetectionsTable',
  components: {
    Maps,
  },
  props: {
    dataUrl: {
      type: String,
      default: false,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
      trashObject: null,
      clients: [],
      isStriped: true,
      selected: null,
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      coord: '',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-medium',
      lats: [],
      mapData: [],
    };
  },
  computed: {
    trashObjectName() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      return null;
    },
  },
  mounted() {
    console.log(this.dataUrl);
    if (this.dataUrl) {
      // console.log(this.dataUrl);
      this.isLoading = true;
      this.$axios
        .get(this.dataUrl)
        .then(r => {
          this.isLoading = false;
          if (r.data && r.data.detections) {
            if (r.data.detections.length > this.perPage) {
              this.paginated = true;
            }
            this.clients = r.data.detections;
            this.clients.forEach(el => {
              let val = el['location'];
              this.lats.push(val);
            });
            for (let i = 0; i < this.lats.length; i++) {
              let res = this.lats[i].split('Lats');
              this.mapData.push(res);
              // console.log(res);
            }
            let i = 0;
            this.clients.forEach(el => {
              el['location'] = this.mapData[i];
              i = i + 1;
            });
            // console.log(this.mapData);
            // console.log(this.lats);
            console.log(this.clients);
          }
        })
        .catch(e => {
          this.isLoading = false;
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger',
          });
        });
    }
  },
  methods: {
    trashModal(trashObject) {
      this.trashObject = trashObject;
      this.isModalActive = true;
    },
    trashConfirm() {
      this.isModalActive = false;
      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false,
      });
    },
    trashCancel() {
      this.isModalActive = false;
    },
  },
};
</script>
