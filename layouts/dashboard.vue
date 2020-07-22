<template>
    <div>
        <Navbar />
        <section class="section">
            <div class="columns">
                <div class="column is-3">
                    <Sidebar />
                </div>
                <div class="column">
                    <nuxt />
                </div>
            </div>
        </section>
        
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
export default {
    components: {
        Footer,
        Sidebar,
        Navbar
    }
}
</script>

<style lang="scss">

</style>