<template>
  <div class='header'>
    <div class="navbar" ref='navbar'>    
      <div class="navbar__left">
        <a class="navbar__link" href='/'>
          <div class="logo-block">
            <img class='logo-img' src="/icon/icon.webp">            
          </div>
        </a>
      </div>
      <div class="navbar__right" ref='links'>
        <NuxtLink class="navbar__link" to='/'>мастер</NuxtLink>
        <NuxtLink class="navbar__link" to='/prices'>цены</NuxtLink>
        <NuxtLink class="navbar__link" to='/contacts'>контакты</NuxtLink>
      </div>     
       <div class='hamburger' @click='processBars()' ref='bars'>
        <font-awesome-icon :icon="['fas', 'bars']" class='hambars'/>
      </div> 
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
  display: none
  align-items: center
  justify-content: center
  .hambars
    // color: #fff
    height: 30px
    width: 30px
.header-img
  height: 450px
  margin-top: 100px
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
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
.logo-img
  height: 100%
  width: 100% 
.navbar
  width: 100%
  background-color: #fff
  padding: 0 20px 0 20px
  box-shadow: 0 0 10px rgba(0,0,0,.3)
  justify-content: space-between
  z-index: 1100
  position: fixed
  &__link
    text-decoration: none
    font-family: Montserrat
    letter-spacing: 3px
    color: rgba(0,0,0,.9)
    font-size: 22px
    font-weight: 600
    margin-right: 20px
    &:hover, &:focus
      border-bottom: 3px solid rgba(0,0,0,.3)
.navbar, .navbar__left, .navbar__right
  height: 100px  
  display: flex  
  align-items: center  
  flex-direction: row
 
.nuxt-link-exact-active
  color: rgba(0,0,0,.5)  
.nuxt-link, .nuxt-link-active
  text-decoration: none
  color: rgba(0,0,0,.8)

@media(max-width: 700px)
  .hamburger
    display: flex
  .navbar__right
    display: none
  .header-img
    .slogan
      font-size: 4rem
      line-height: 6rem
@media(max-width: 500px)  
  .nav-link
    a
      font-size: 22px
.showNav
  display: flex
  width: 100%  
  flex-direction: column
  align-items: center  
  z-index: 1102
  font-size: 22px

.columned-menu
  display: flex
  height: 200px
  flex-direction: column
  width: 100%
.kickBanner
  display: none
.blackBars
  background-color: rgba(0,0,0,.9)
  color: #fff
</style>

<script>
  export default{
    methods: {      
      processBars(){
        function hamburger(bar, links, banner, icon){
          links.classList.toggle('showNav')
          bar.classList.toggle('columned-menu')
          banner.classList.toggle('kickBanner') 
          icon.classList.toggle('blackBars')      
          }
          let mobBar = this.$refs.navbar
          let banner = this.$refs.banner
          let bars = this.$refs.bars
          let links = this.$refs.links
          let menuLinks = document.querySelectorAll('a')
          
          hamburger(mobBar, links, banner, bars)
          menuLinks.forEach(function(menuLink){ 
          menuLink.addEventListener("click", hamburger(mobBar, links, banner, bars)) 
        })
      }
    }
  }
</script>