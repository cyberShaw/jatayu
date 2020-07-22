<template>
    <b-menu>
        <b-menu-list label="Menu">
        <b-menu-item icon="information-outline" label="Info"></b-menu-item>
        <b-menu-item @click="$router.push('/detections')" icon="settings" label="Detections"></b-menu-item>
        <b-menu-item icon="account" label="My Account">
            <b-menu-item label="Account data"></b-menu-item>
            <b-menu-item label="Addresses"></b-menu-item>
        </b-menu-item>
        </b-menu-list>
        <b-menu-list>
        <b-menu-item label="Expo" icon="link"></b-menu-item>
        </b-menu-list>
        <b-menu-list label="Actions">
        <b-menu-item label="Logout"></b-menu-item>
        </b-menu-list>
    </b-menu>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>

<style lang="scss">

</style>