<template>
    <div class="container">
        <div class="tile is-ancestor">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <div class="tile notification is-child is-danger">
                        <figure class="image is-4by3">
                <img id="c-image" alt="Placeholder image" />
            </figure>
                    </div>
                    <div class="tile notification is-child is-danger">
                        <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img
                            src="https://bulma.io/images/placeholders/96x96.png"
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{ cid }}</p>
                    <p class="subtitle is-6">Criminal ID</p>
                </div>
            </div>
                    </div>
                </div>
            </div>
            <div class="tile is-parent">
                <div class="tile notification is-child is-success">
                    <p class="title">
                        Locations Detected
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileCard',
    props: ['cid', 'img_rsc'],
    mounted() {
        document.getElementById('c-image').setAttribute('src', this.img_rsc)
    }
}
</script>
