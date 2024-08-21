<template>
    <Nav />
    <BackButton />

    <div class="about">
        <div class="TedX-logo">
            <img src="@/assets/images/tedxiitpatna_logo-1W.png" alt="" width="100">
        </div>
        <div class="aboutIITP">
            <div class="heading">About IIT Patna </div>
            <div class="text" id="expandable-text" v-if="this.showWebView">
                Indian Institute of Technology Patna is one of the new IITs established by an Act of
                the Indian Parliament on August 06, 2008. Offering various undergraduate, postgraduate, and
                post-doctoral degrees, it is one of the fastest developing colleges in India.<br /><br />
                Emerging as a center of thriving excellence, the lush green campus of IIT Patna spans 500 acres.
                Many
                inquisitive minds, eager to expand their technical prowess, are ably supported by astute professors
                and
                state-of-the-art laboratories.<br /><br />
                As the site for vibrant fests – Nebula, Reverberance, Celesta, Anwesha, Infinito– IIT Patna sees
                overwhelming participation from all over the country. TEDxIITPatna
                is one of the more formal events in
                this Institute of National Importance. IIT Patna is committed to providing the nation with
                well-rounded
                individuals with professional and scientific competence of the highest degree.
            </div>
            <!-- Text in mobile view -->
            <div class="text" id="expandable-text" v-else>
                Indian Institute of Technology Patna is one of the new IITs established by an Act of
                the Indian Parliament on August 06, 2008. Offering various undergraduate, postgraduate, and
                post-doctoral degrees, it is one of the fastest developing colleges in India.<br /><br />
                Emerging as a center of thriving excellence, the lush green campus of IIT Patna spans 500 acres.
                Many
                inquisitive minds, eager
                to expand their technical prowess, are ably
                supported by astute professors and
                state-of-the-art laboratories.<br /><br />
                As the site for vibrant fests – Nebula, Reverberance, Celesta, Anwesha, Infinito– IIT Patna sees
                overwhelming participation from all over the country. TEDxIITPatna is one of the more formal events
                in
                this Institute of National Importance. IIT Patna is committed to providing the nation with
                well-rounded
                individuals with professional and scientific competence of the highest degree.
            </div>
        </div>
        <div class="aboutTed">
            <div class="heading">About TED</div>

            <div class="text" id="expandable-text" v-if="this.showWebView">
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference
                in
                California 30 years ago, TED has grown to support its mission with multiple initiatives. The two
                annual
                TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many
                of
                these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane
                Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
                Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
                Sal Khan and Daniel Kahneman.<br /><br />
                The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
                initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations from volunteers worldwide; the
                educational
                initiative TED-Ed. TED has established The Audacious Project that
                takes a collaborative approach to
                funding ideas with the potential to create change at thrilling scale; TEDx, which supports
                individuals
                or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows
                program, helping world-changing innovators from around the globe to amplify the impact of their
                remarkable projects and activities.<br /><br />
                Follow TED on Twitter at <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a>, or
                on
                Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a>.
            </div>
            <!-- Text in mobile view -->
            <div class="text" id="expandable-text" v-else>
                TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference
                in
                California 30 years ago, TED has grown to support its mission with multiple initiatives. The two
                annual
                TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many
                of
                these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane
                Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
                Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
                Sal Khan and Daniel Kahneman.<br /><br />
                The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
                initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations from volunteers worldwide; the
                educational
                initiative TED-Ed.
                <!-- <span id="more">, Sir Richard Branson, Nandan
            Nilekani, Philippe Starck, Ngozi Okonjo-Iweala,
            Sal Khan and Daniel Kahneman.<br /><br />
            The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
            initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides
            subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational
            initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to
            funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals
            or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows
            program, helping world-changing innovators from around the globe to amplify the impact of their
            remarkable projects and activities.<br /><br />
            Follow TED on Twitter at <a href="http://twitter.com/TEDTalks">http://twitter.com/TEDTalks</a>, or on
            Facebook at <a href="http://www.facebook.com/TED">http://www.facebook.com/TED</a>.</span> -->
            </div>

        </div>

    </div>
</template>

<script scoped>
import Nav from '@/components/Nav.vue'
import BackButton from '@/components/BackButton.vue'

export default {
    components: {
        Nav,
        BackButton
    }

}
</script>

<style scoped>
/* @import '@/assets/css/about_content1.css'; */
@import url('https://fonts.cdnfonts.com/css/poppins');

.about {
    color: white;
    width: 100%;
    height: auto;
    font-family: poppins;
    position: relative;
 
    padding:20px;
}
.about::before{
    content:"";
    background: url("../assets/images/combined.png") ;
    background-size: cover;
    position: absolute;
    width:100%;
    height:100%;
    min-height:100vh;
    top:0;
    left:0;
    opacity: 1;
    filter:brightness(0.5);
    z-index: -1; 
    
 }   


.TedX-logo {
    width: 300px;
    margin: 0px auto;
    padding-top: 130px;
}

.TedX-logo img {
    width: 300px;
}

.aboutIITP ,.aboutTed {
    width: 75vw;
    margin: 30px auto;
    border: 2px solid white;
    border-radius: 31px;
    background: black;
    padding: 10px 15px 15px 15px;
    opacity: .77;
    margin-bottom: 100px;
    font-size:16px;
}
.heading {
    color: #FF2B1D;
    font-size: 35px;
    padding-bottom: 20px;
    font-weight: bold;
}
.text {
    width: 90%;
    position: relative;
    z-index: 1;
}

@media screen and (max-width: 450px) {
  .aboutIITP,.aboutTed{
    width:80vw;
    font-size:14px ;
  }
  .heading{
    font-size:32px;
  }
}
</style>