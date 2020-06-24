<template>
    <div>
        <Aside />
        <nuxt />
    </div>
</template>

<script>
    import Aside from '@/components/Aside'
    export default {
        data() {
            return {}
        },
        components: {
            Aside
        },
    }
</script>
