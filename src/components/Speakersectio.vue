
<template>
    <div :class="['speaker-modal-wrapper', 0.9 * this.screenWidth >= this.screenHeight ? 'web' : 'mobile']"
       >
        <div class="overlay"></div>
        <div class="container">
           
            <img :src="imageSrc" class="pic">
            <div class="content">
                <div class="name-wrapper">
                    <div class="name">{{ name }}</div>
                    <div class="title">{{ title }}</div>
                </div>
                <div class="desc">
                    <span v-html="content"></span>
                    <a :href="talkLink" target="_blank" class="talk" v-if="talkLink">Talk</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GallerySpeakerModal',
    props: {
        'imageSrc': {
            type: String
        },
        'name': {
            type: String
        },
        'title': {
            type: String
        },
        'content': {
            type: String
        },
        'showModal': {
            type: Boolean,
            default: false
        },
        'talkLink': {
            type: String,
            default: ""
        }
    },
    emits: [
        'closeSpeakerModal'
    ],
    data() {
        return {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
        }
    },
    methods: {
        onResize() {
            this.screenWidth = window.innerWidth
            this.screenHeight = window.innerHeight
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize)
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    }
}
</script>

<style scoped>

</style>