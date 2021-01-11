<template>
  <div class='header'>
    <div class="navpannel">
        <NuxtLink to='/'>
        <div class="logo-block">
          <img class='logo-img' src="/img/nail_logo.png">
          <div class="mikanails">mika nails</div>
        </div>
        </NuxtLink>
        <div class="navbar">
          <ul class="navlist">
            <li class="nav-link"><NuxtLink to='/'>мастер</NuxtLink></li>
            <li class="nav-link"><NuxtLink to='/prices'>цены</NuxtLink></li>
            <li class="nav-link"><NuxtLink to='/contacts'>контакты</NuxtLink></li>
          </ul>
        </div>
      </div>
    <div class="illustration">
        <img src="/img/ladies.png">
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
  height: 450px
  display: flex
  flex-direction: column
  background: linear-gradient(90deg, rgba(237, 220, 227, 1) 0%, rgba(237, 220, 227, .2) 50%, rgba(230, 185, 181,1) 100%)

.navpannel
  height: 100px
  width: 100%
  padding: 0 1.5rem 0 1.5rem
  display: flex
  justify-content: space-between
  align-items: center

.logo-block
  width: 75px
  height: 75px
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
  max-width: 350px
  justify-content: space-around


.navlist
    display: flex
    align-items: center
    justify-content: space-between
    flex-direction: row
    list-style: none
    padding-left: 0

.nav-link a
  text-decoration: none
  font-family: Pangolin
  letter-spacing: 3px
  color: rgba(0,0,0,.7)
  font-size: 26px
  font-weight: 500
  color: rgba(0,0,0,.7)
  margin-right: 10px


.nuxt-link, .nuxt-link-active
  text-decoration: none
  color: black

.nav-link .nuxt-link-exact-active
  color: rgba(135, 12, 55, .6)

@media(max-width: 800px)
  .nav-link
    margin-right: 7px

@media(max-width: 500px)
  .navbar
    ul
      flex-direction: column 
   
  .nav-link
    a
      font-size: 22px    
  
.illustration
  z-index: 1000
  display: flex
  justify-content: center

.illustration img
    height: 250px
    width: 270px

</style>