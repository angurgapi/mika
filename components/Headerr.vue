<template>
  <div class='header'>    
        <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item is-half">
            <img
              src="/img/nail_logo.webp"
              alt="Logo: fingernail"
              width="70"
              height="70"
            />
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
          <nuxt-link
            active-class="is-active"
            to="/pet/new"
            class="navbar-item is-tab"
            exact
          >Post your own pet 😎</nuxt-link>
        </div>
      </div>
    </nav>
      <div class="header-img">
        <p class='slogan'>Влюбись в свои руки</p><p class="slogan">уже сегодня</p>
      </div>    
 </div>
</template>

<style lang='sass'>
@font-face
    font-family: 'Montserrat'
    font-style: normal
    font-weight: 500
    font-display: swap
    src: url('~assets/fonts/Montserrat.ttf') format('truetype')
.header
  width: 100%
  height: 500px
  display: flex
  flex-direction: column
.hamburger
  position: absolute
  z-index: 1001
  right: 30px
  top: 30px
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
  font-family: Comfortaa
.navbar
  height: 130px
  width: 100%
  display: flex
  justify-content: center
  align-items: center
.navlist
    display: flex
    max-width: 400px
    align-items: center
    justify-content: space-between
    flex-direction: row
    list-style: none
    padding-left: 0
.nav-link a
  text-decoration: none
  font-family: Montserrat
  letter-spacing: 3px
  color: rgba(0,0,0,.9)
  font-size: 22px
  font-weight: 600
  margin-right: 10px
.nuxt-link, .nuxt-link-active
  text-decoration: none
  color: black
.nav-link .nuxt-link-exact-active
  color: rgba(0,0,0,.6)


  
@media(max-width: 800px)
  .nav-link
    margin-right: 7px
@media(max-width: 700px)
  .header
    height: 450px
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
      font-size: 22px
.showNav
  display: flex
  flex-direction: column
  position: absolute
  z-index: 1002
  height: 250px
</style>

<script>
  export default{
    methods: {
      hamburger(){
        let mobBar = this.$refs.nbar
        mobBar.classList.toggle('showNav')

      }
    }
  }
</script>