<template>
  <div class='header'>    
    <NuxtLink to='/'>
      <div class="logo-block">
        <img class='logo-img' src="/img/nail_logo.webp">
        <div class="mikanails">mika nails</div>
      </div>
    </NuxtLink>
        
    <div class="navbar" ref='nbar'>
      <NuxtLink to='/'>мастер</NuxtLink>
      <NuxtLink to='/prices'>цены</NuxtLink>
      <NuxtLink to='/contacts'>контакты</NuxtLink>
    </div>        
      
    <div class='hamburger' @click='processBars()' ref='bars'>
      <font-awesome-icon :icon="['fas', 'bars']" class='hambars'/>
    </div> 
    
    <div class="header-img" ref='banner'>
      <p class='slogan'>Влюбись в свои руки</p><p class="slogan">уже сегодня</p>
    </div>    
 </div>
</template>

<style lang='sass'>
@font-face
    font-family: 'Pangolin'
    font-style: normal
    font-weight: 500
    font-display: swap
    src: url('~assets/fonts/Pangolin.ttf') format('truetype')
.header
  width: 100%
  // height: 500px
  display: flex
  flex-direction: column
  box-shadow: 0 0 20px rgba(255,255,255,.7)
.hamburger
  position: absolute
  z-index: 1010
  right: 30px
  top: 30px
  height: 40px
  width: 40px
  display: flex
  align-items: center
  justify-content: center
  .hambars
    color: #fff
    height: 30px
    width: 30px
.header-img
  height: 450px
  background-image: url('/img/banners/5.webp')
  background-size: cover
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  .slogan
    font-size: 6rem
    overflow: hidden
    font-weight: 500
    color: #fff
    font-family: 'handwritten'
    font-style: italic
    letter-spacing: -2px
    transform: rotate(-5deg)
    line-height: 7.8rem
    max-width: 90%
    text-align: center

.logo-block
  width: 75px
  height: 75px
  position: absolute
  top: 20px
  left: 40px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  border: 3px solid rgba(0,0,0,0.9)
.logo-img
  height: 30px
  width: 32px  
.mikanails
  text-align: center
  font-size: 18px
  font-family: 'Pangolin'

.navbar
  height: 130px
  width: 100%
  display: flex
  justify-content: center
  align-items: center  
  flex-direction: row
  padding-left: 0
  a
    text-decoration: none
    font-family: Montserrat
    letter-spacing: 3px
    color: rgba(0,0,0,.9)
    font-size: 22px
    font-weight: 600
    margin-right: 20px
    &:hover, &:focus
      border-bottom: 3px solid rgba(0,0,0,.3)
  .nuxt-link-exact-active
    color: rgba(0,0,0,.5)  
.nuxt-link, .nuxt-link-active
  text-decoration: none
  color: rgba(0,0,0,.8)  


@media(max-width: 700px)
  .logo-block
    top: 20px
    left: 20px
  .hamburger
    display: flex
  .navbar
    display: none
  .header-img
    .slogan
      font-size: 4rem
      line-height: 6rem
@media(max-width: 500px)  
  .nav-link
    a
      font-size: 26px
.showNav
  display: flex
  flex-direction: column
  background-color: rgba(255,255,255,.9)
  z-index: 1002
  height: 120px
  font-size: 32px
  border-bottom: 3px solid rgba(0,0,0,.8)
.kickBanner
  display: none
.blackBars
  background-color: rgba(0,0,0,.9)
</style>

<script>
  export default{
    methods: {      
      processBars(){
        function hamburger(bar,banner,icon){
        bar.classList.toggle('showNav')
        banner.classList.toggle('kickBanner') 
        icon.classList.toggle('blackBars')      
        }
        let mobBar = this.$refs.nbar
        let banner = this.$refs.banner
        let bars = this.$refs.bars
        let menuLinks = document.querySelectorAll('a')
        console.log(menuLinks)
        hamburger(mobBar, banner, bars)
        menuLinks.forEach(function(menuLink){ 
        menuLink.addEventListener("click", hamburger(mobBar, banner, bars)) 
        })
      }
    }
  }
</script>