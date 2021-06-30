<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang='sass'>
@font-face
    font-family: 'Montserrat'
    font-style: normal
    font-weight: 500
    font-display: swap
    src: url('~assets/fonts/Montserrat.ttf') format('truetype')

html
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*,
*::before,
*::after 
  box-sizing: border-box
  margin: 0
  overflow-x: hidden

.section 
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding: 20px

.section-headline
  font-family: 'Montserrat'
  font-size: 2rem
  text-align: center
  font-weight: 600  
  margin: 20px auto 20px auto
.marked
  text-align: center
  font-size: 56px
  font-weight: 800
  color: rgba(209, 75, 133, .8)
@media(max-width:500px)
  .section-headline
    font-size: 26px

.handwritten
  font-family: handwritten
  text-align: center
  font-size: 2.5rem
.card
  border-radius: 5px 
  box-shadow: 0 0 10px rgba(0,0,0,.3)
  background-color: rgba(255,255,255,.5)


.prev, .next 
  cursor: pointer
  position: relative
  overflow: hidden
  display: flex
  align-items: center
  justify-content: center
  z-index: 1010  
  width: 35px
  height: 35px
  padding: 16px
  background-color: rgba(255, 237, 219, 0.7)  
  color: rgba(209, 75, 133, .8)
  border-radius: 50px
  font-weight: bold
  font-size: 18px
  transition: 0.6s ease
  user-select: none
.prev 
  left: 35px
.next
  right: 35px
</style>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
  
}
</script>