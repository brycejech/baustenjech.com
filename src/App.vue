<template>
    <div id="app">
        <Navigation />
        <Hero />
        <router-view/>
    </div>
</template>

<script>
'use strict';

import Navigation from '@/components/Navigation';
import Hero       from '@/components/Hero';

export default {
    name: 'App',
    components: {
        Navigation,
        Hero
    }
}

</script>

<style lang="sass">

body
    background-color: #F5F5F5

.container
    background-color: white
    border-radius: 3px
    margin-bottom: 2rem
    padding: 3rem 2rem 2rem
hr
    max-width: 40%
    margin: 25px auto
    border-color: rgba(44, 44, 44, 0.75)

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
