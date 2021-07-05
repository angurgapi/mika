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
      <div class="navbar__right" @click='mobileMenuClose()' ref='links'>
        <NuxtLink class="navbar__link" to='#about'>мастер</NuxtLink>
        <NuxtLink class="navbar__link" to='#prices'>цены</NuxtLink>
        <NuxtLink class="navbar__link" to='#contacts'>контакты</NuxtLink>
      </div>     
       <!-- <div class="menuToggle" @click='mobileMenuOpen ? mobileMenuOpen = false : mobileMenuOpen = true'>     -->
        <div class="menuToggle" @click='processBars()' ref='menuToggle'>     
          <font-awesome-icon v-if='!this.mobileMenuOpen' :icon="['fas', 'bars']" class="menuToggle__icon" />
          <font-awesome-icon v-else :icon="['fas', 'times']" class="menuToggle__icon"/>  
       
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
  @media(max-width: 600px) 
    display: none
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

.menuToggle 
  display: none
  text-align: center
  width: 40px
  height: 40px
  &__icon
    font-size: 22px
    height: 40px
    width: 40px
  @media(max-width: 600px)
    display: block
@media(max-width: 600px) 
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

.extended 
  height: 200px
.showLinks
  display: flex
  height: 100%
  flex-direction: column
  align-items: center
  justify-content: center
// #menu
//   position: absolute
//   width: 300px
//   margin: -100px 0 0 -50px
//   padding: 50px
//   padding-top: 125px
  
//   background: #ededed
//   list-style-type: none
//   -webkit-font-smoothing: antialiased
  
//   transform-origin: 0% 0%
//   transform: translate(-100%, 0)
  
//   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)
// #menu li
//   padding: 10px 
//   font-size: 22px
// #menuToggle input:checked ~ ul
//   transform: none
 
</style>

<script>
  export default{
    data(){
      return {
        mobileMenuOpen: false
      }
    },
    methods: {     
       mobileMenuClose(){
        if (this.mobileMenuOpen){
          this.$refs.menuToggle.click()
        }
        
      
      },
      processBars(){
        this.mobileMenuOpen ? this.mobileMenuOpen = false : this.mobileMenuOpen = true
        this.$refs.navbar.classList.toggle('extended')
        this.$refs.links.classList.toggle('showLinks')
      },
     
    }
  }
</script>