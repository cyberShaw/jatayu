<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a href class="navbar-item">
                    <h3
                        class="is-family-secondary logo has-text-green is-size-4"
                    >
                        <strong>Jatayu</strong>
                    </h3>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <nuxt-link
                        to="/dashboard"
                        class="a-menu is-size-5 navbar-item"
                        >Dashboard</nuxt-link
                    >
                    <nuxt-link
                        to="#features"
                        class="a-menu is-size-5 navbar-item"
                        >Features</nuxt-link
                    >
                    <nuxt-link to="#" class="a-menu is-size-5 navbar-item"
                        >About</nuxt-link
                    >
                    <nuxt-link to="/login" class="a-menu is-size-5 navbar-item"
                        >Sign In</nuxt-link
                    >
                </div>
            </div>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
