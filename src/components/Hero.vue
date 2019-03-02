<template lang="html">
    <div id="hero">
        <div class="memory">
            <h1>In Loving Memory</h1>
            <h2>Bausten Riley Jech</h2>
            <h4>08/10/1993 - 02/18/2019</h4>
        </div>
    </div>
</template>

<script>
'use strict';

export default {
    name: 'Hero'
}
</script>

<style lang="sass" scoped>

#hero
    position: relative
    width: 100%
    height: 70vh
    margin-bottom: 25px

    background:
        image: url('../assets/hero_2.jpg')
        size: cover
        repeat: no-repeat
        position: top left

.memory
    position: absolute
    bottom: 50px
    right: 50px
    background-color: rgba(0, 0, 0, .85)
    color: white
    padding: 15px 25px
    border-radius: 3px

h1, h2, h3, h4, h5, h6
    margin-bottom: 5px
    font-family: cursive

</style>
