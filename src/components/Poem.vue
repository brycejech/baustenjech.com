<template lang="html">
    <div id="poem">
        <div class="container">
            <h1 class="text-center">A Poem by Ruth Bengs</h1>
            <div class="row">
                <div class="col-6 left-col">
                    <span>Loving Life</span>
                    <span>From a young boy</span>
                    <span>Playing with his toys</span>
                    <span>To a young man</span>
                    <span>Loving natures land</span>
                    <span>Bausten with his big heart</span>
                    <span>Not letting on he was smart</span>
                    <span>Mammoo teaching him to cook</span>
                    <span>And to read a book</span>
                    <span>Pop telling him to look</span>
                    <span>Then to set the hook</span>
                    <span>Loving his brothers two</span>
                    <span>Pulling pranks and yelling BOO</span>
                    <span>Mom and Dad watching him grow</span>
                    <span>To see what life he would sow</span>
                    <span>Nanny and Pop watching him get an education</span>
                    <span>And so proud of what he had done</span>
                    <span>One day God reached for Bausten’s hand</span>
                    <span>And said, “Come See My Land</span>
                    <span>Oh the adventures you will take</span>
                    <span>What a Great Angel you will make”</span>
                    <span>Loving his family and friends with all his heart</span>
                    <span>Bausten said, “This earth I’m ready to part”</span>
                    <span>Do not cry for me</span>
                    <span>For you I will greet</span>
                    <span>At God’s heavenly gate</span>
                    <span>For He has already set the date</span>
                    <blockquote>
                        - Ruth Bengs
                    </blockquote>
                </div>
                <div class="col-6 right-col">
                    <img class="poem-img" src="@/assets/img/african-pants.jpg" alt="Bausten Jech">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
'use strict';

export default {
    name: 'Poem'
}

</script>

<style lang="sass" scoped>

#poem
    text-align: center

    span
        display: block
        position: relative
        margin-bottom: 3px
        font-family: cursive

blockquote
    font-size: 2rem

.left-col
    padding-right: 0
.right-col
    padding-left: 0

.poem-img
    border-radius: 3px
    filter: opacity(85%)

</style>
