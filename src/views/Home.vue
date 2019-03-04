<template>
    <section id="home">
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <Thumbnail :thumb="require('@/assets/img/thumbs/maya-satnam.jpg')" alt="Bausten, Satnam, and Maya" />
                </div>
                <div class="col-xs-4">
                    <Thumbnail :thumb="require('@/assets/img/thumbs/chillwater.jpg')" alt="Bausten chillwater shirt" />
                </div>
                <div class="col-xs-4">
                    <Thumbnail :thumb="require('@/assets/img/thumbs/kissing-mom.jpg')" alt="Bausten kissing mom" />
                </div>
            </div>
        </div>

        <!-- Ruthy's Poem -->
        <Poem />

        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <Thumbnail :thumb="require('@/assets/img/thumbs/birthday.jpg')" alt="Bausten birthday" />
                </div>
                <div class="col-xs-4">
                    <Thumbnail :thumb="require('@/assets/img/thumbs/graduation.jpg')" alt="UCO graduation" />
                </div>
                <div class="col-xs-4">
                    <Thumbnail :thumb="require('@/assets/img/thumbs/damion.jpg')" alt="Bausten and Damion" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
'use strict';

import Poem      from '@/components/Poem';
import Thumbnail from '@/components/Thumbnail';

export default {
    name: 'Home',
    components: {
        Poem,
        Thumbnail
    }
}
</script>

<style lang="sass" scoped>

</style>
