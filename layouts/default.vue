<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang='sass'>
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


.section-headline
  color: rgba(135, 12, 55, .8)
  text-transform: uppercase
  font-family: Pangolin
  font-size: 2.5rem
  text-align: center
  font-weight: 600
  display: flex
  align-items: center
  justify-content: center
  margin: 20px auto 20px auto
.marked
  text-align: center
  font-size: 56px
  font-weight: 800
  color: rgba(209, 75, 133, .8)
@media(max-width:500px)
  .section-headline
    font-size: 28px

</style>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  export default {
  
}
</script>