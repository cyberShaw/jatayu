<template>
    <div>
        <iframe
            id="map-box"
            width="100%"
            height=""
            frameborder="0"
            style="border:0"
            allowfullscreen
        >
        </iframe>
    </div>
</template>

<script>
export default {
    name: 'Maps',
    props: {
        loc: ''
    },
    data() {
        return {
            apiKey: 'AIzaSyC9U4sCMhib5oL3laji-Tlb7AJgKrioYEM',
            rootQuery: "https://www.google.com/maps/embed/v1/place?key="
        }
    },
    mounted() {
        let locationQuery = this.rootQuery.concat(this.apiKey, "&q=", this.loc)
        document.getElementById('map-box').setAttribute('src', locationQuery)
    }
}
</script>

<style>
    #map-box {
        height: 50vh;
    }
</style>
