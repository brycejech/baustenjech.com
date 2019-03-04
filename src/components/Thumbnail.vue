<template lang="html">
    <div class="thumbnail">
        <img :src="thumb" :alt="alt">
    </div>
</template>

<script>
export default {
    name: 'Thumnail',
    props: [ 'thumb', 'image', 'alt' ],
    methods: {
        getImage(path){
            return require(path);
        }
    }
}
</script>

<style lang="css" scoped>

</style>
