<template>
  <div class="main-block">    
    <About />
    <div class="works">
        <h2 class="section-headline"><span class='marked'>Р</span>аботы</h2>    
        
    </div>
    <Carousel />
    <Card />
    <h2 class='section-headline'><span class='marked'>В</span>ажны все этапы работы с ногтями</h2>
    <p class="handwritten">...и я не забываю об этом!</p>
    <StagesGrid />    
    <Prices />
    <Contacts />
  </div>
</template>

<style lang='sass'>

@font-face
    font-family: 'Pangolin'
    font-style: normal
    font-weight: 500
    font-display: swap
    src: url('~assets/fonts/Pangolin.ttf') format('truetype')
@font-face
    font-family: 'handwritten'
    font-style: normal
    font-weight: 500
    font-display: swap
    src: url('~assets/fonts/handwritten.ttf') format('truetype')
.main-block
  max-width: 100%
  margin: 0
  background-color: rgba(255, 237, 219, .7)
.works
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  overflow: hidden
.mikanails
  overflow: hidden
.discounts
  width: 50%
  font-size: 22px

@media(max-width:500px)
  .works
    width: 95%
    margin: auto
  .heading
    width: 100%
  img
    width: 350px
  .works
    margin-top: 30px

@media(max-width: 810px)
  .works
    width: 90%
    margin: 30px auto
 
</style>

<script>
import Carousel from '@/components/Carousel'
import StagesGrid from '@/components/StagesGrid'
import Card from '@/components/Card'
import About from '@/components/About'
import Prices from '@/components/Prices'
import Contacts from '@/components/Contacts'

export default {

  
}
</script>