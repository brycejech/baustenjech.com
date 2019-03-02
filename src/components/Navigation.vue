
<template lang="html">
    <nav>
        <div id="logo">
            <router-link class="nav-item" :to="{ name: 'home' }">Bausten Jech</router-link>
        </div>
        <div id="nav-items">
            <router-link class="nav-item" :to="{ name: 'home' }">Home</router-link>
            <a href="#" class="nav-item">Photos</a>
            <router-link class="nav-item" to="stories">Stories</router-link>
            <router-link class="nav-item" :to="{ name: 'obituary' }">Obituary</router-link>
        </div>
    </nav>
</template>

<script>
'use strict';

export default {
    name: 'Navigation'
}
</script>

<style lang="sass" scoped>

    nav::after
        content: ''
        display: table
        width: 100%
        clear: both
        border-bottom: 1px solid rgba(0,0,0,0.25)
    #logo
        float: left

    #nav-items
        float: right
        .nav-item
            float: left

    .nav-item
        position: relative
        display: inline-block
        padding: 10px 15px
</style>
