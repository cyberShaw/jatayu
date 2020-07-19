<!--
<template>
  <div>
    <hero-bar>
        Tables
        <router-link slot="right" to="/" class="button">
            Dashboard
        </router-link>
    </hero-bar>
    <section class="section is-main-section">
        <notification class="is-info">
            <div>
                <b-icon icon="buffer" custom-size="default" />
                <b>Sorted and paginated table.</b>&nbsp;Based on Buefy's
                table.
            </div>
        </notification>

        <hr />

        <notification class="is-info">
            <div>
                <b-icon icon="buffer" custom-size="default" />
                <b>Tightly wrapped</b> &mdash; table header becomes card
                header
            </div>
        </notification>

        <card-component class="has-table has-mobile-sort-spaced">
            <DetectionsTable
                :data-url="
                    `${this.$axios.defaults.baseURL}detections/`
                "
                :checkable="true"
            />
        </card-component>

        <hr />

        <!-- <notification class="is-info">
            <div>
                <b-icon icon="buffer" custom-size="default" />
                <b>Empty table.</b> When there's nothing to show
            </div>
        </notification>
    </section>    
  </div>
</template>

<script>
import Notification from '@/components/Notification'
import DetectionsTable from '@/components/DetectionsTable'
import CardComponent from '@/components/CardComponent'
import HeroBar from '@/components/HeroBar'
export default {
    components: {
        HeroBar,
        CardComponent,
        DetectionsTable,
        Notification
    },
    computed: {
        titleStack() {
            return ['Admin', 'Tables']
        }
    },
    head() {
        return {
            title: 'Tables — Admin Null Nuxt.js Bulma'
        }
    }
}
</script>

<style>

</style>
-->