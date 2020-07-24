<template>
    <div>
        <b-table
            :loading="isLoading"
            :paginated="paginated"
            focusable
            :selected.sync="selected"
            :mobile-cards="hasMobileCards"
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
            :columns="columns"
        >
            <template slot-scope="props">
                <b-table-column
                    label="Detection ID"
                    field="id"
                    searchable
                    sortable
                >
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip
                            label="Search with the detection ID using the box!"
                            dashed
                        >
                            <p class="is-family-monospace">
                                {{ column.label }}
                            </p>
                        </b-tooltip>
                    </template>
                    {{ props.row.id }}
                </b-table-column>
                <b-table-column
                    label="Criminal ID"
                    field="cid"
                    searchable
                    sortable
                >
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip
                            label="Search with the Criminal ID using the box!"
                            dashed
                        >
                            <p class="is-family-monospace">
                                {{ column.label }}
                            </p>
                        </b-tooltip>
                    </template>
                    <nuxt-link :to="{name:'criminal-cid', params: {cid: props.row.cid}}" class="button is-small is-primary">
                    {{ props.row.cid }}
                    </nuxt-link>
                </b-table-column>
                <b-table-column
                    label="Location: Coordinates"
                    field="location"
                    sortable
                    centered
                >
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip
                            label="Click on the icon at the left to show map!"
                            dashed
                        >
                            <p class="is-family-monospace">
                                {{ column.label }}
                            </p>
                        </b-tooltip>
                    </template>

                    {{ props.row.location }}
                </b-table-column>
                <b-table-column
                    class="image is-square"
                    label="Detected Image"
                    field="progress"
                >
                    <template slot="header" slot-scope="{ column }">
                        <p class="is-family-monospace">{{ column.label }}</p>
                    </template>
                    <img class="zoom" :src="props.row.rsrc" />
                </b-table-column>
                <b-table-column label="Time Stamp" searchable sortable>
                    <template slot="header" slot-scope="{ column }">
                        <b-tooltip
                            label="Search with the timestamp using the box!"
                            dashed
                        >
                            <p class="is-family-monospace">
                                {{ column.label }}
                            </p>
                        </b-tooltip>
                    </template>
                    <span class="tag is-info">
                        {{ props.row.time_stamp }}
                    </span>
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
import axios from 'axios'
import Maps from '@/components/Maps'

export default {
    name: 'DetectionsTable',
    components: {
        Maps
    },
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
            sortIconSize: 'is-medium'
        }
    },
    computed: {
        trashObjectName() {
            if (this.trashObject) {
                return this.trashObject.name
            }

            return null
        }
    },
    mounted() {
        console.log(this.dataUrl)
        if (this.dataUrl) {
            console.log(this.dataUrl)
            this.isLoading = true
            this.$axios
                .get(this.dataUrl)
                .then((r) => {
                    this.isLoading = false
                    if (r.data && r.data.detections) {
                        if (r.data.detections.length > this.perPage) {
                            this.paginated = true
                        }
                        this.clients = r.data.detections
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
        trashModal(trashObject) {
            this.trashObject = trashObject
            this.isModalActive = true
        },
        trashConfirm() {
            this.isModalActive = false
            this.$buefy.snackbar.open({
                message: 'Confirmed',
                queue: false
            })
        },
        trashCancel() {
            this.isModalActive = false
        },
    }
}
</script>
