<template>
    <!-- <BackButton  /> -->
    <!-- <Nav :open_button_color="this.showWebView ? 'white' : 'black'" open_button_style="text" /> -->
    <div class="banner-tshirt">
        <div class="logo-merch">
            <div class="logo"><img src="@/assets/images/tedxiitpatna_logo-1W.png" alt=""></div>
            <div class="merch">OFFICAL TED<span>X</span><br />MERCHANDISE</div>
        </div>
        <div class="tshirt">
            <div class="combo-container">
                <div class="combo">
                    <div>
                        <h2 class="combo-offer">COMBO OFFER</h2>
                        <h3 class="off">10% off on 3 T-shirt</h3>
                    </div>


                    <div class="price">
                        <h3 class="old-price">₹1107 </h3>
                        <h2 class="offer-price">₹1079</h2>
                        <h3 class="buy">buy now</h3>
                    </div>

                    <div class="tshirtgroup">
                        <img src="@/assets/images/tshirtgroup.png" alt="">
                    </div>
                </div>
                <div>
                    <button class="buttonbuy">BUY NOW </button>
                </div>
            </div>
            <div class="single-container">
                <div class="single">
                    <img src="@/assets/images/tshirtsingle.png" alt="">
                </div>
                <div>
                    <button class="buttonbuy">BUY NOW </button>
                </div>
            </div>
        </div>
        
    </div>
    <Footer/>
    
</template>

<script>
import Nav from '@/components/Nav.vue';
import BackButton from '@/components/BackButton.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Nav,BackButton,Footer
    },
    data() {
    return {
      screenWidth: window.innerWidth,
      showWebView: window.innerWidth >= 830,
    }
  },
}
</script>

<style>
@import '../assets/css/tshirtbanner.css';

</style>