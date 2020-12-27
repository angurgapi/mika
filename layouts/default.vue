<template>
  <div>
    <Header />
    <Nuxt />
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
  font-family: Pangolin
  font-size: 32px
  text-align: center
  font-weight: 600
  display: flex
  align-items: center
  justify-content: center
  margin-bottom: 30px

@media(max-width:500px)
  .section-headline
    font-size: 25px

</style>

<script>
  import Header from '@/components/Header'
  export default {
  
}
</script>