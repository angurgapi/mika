<template>
  <div class="main-block">
    
    <About />
    <Card />
    <p class='intro'><span class='marked'>В</span>ажны все этапы работы с ногтями</p>
    <p class="postscriptum">...и я не забываю об этом!</p>
    <StagesGrid />
      <div class='works'>
      <p class='intro'><span class='marked'>П</span>римеры моих работ</p>
       <Slider />
     </div>    
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
.intro
  font-size: 2rem
  width: 80%
  text-align: center
  margin: auto
.postscriptum
  font-family: handwritten
  text-align: center
  font-size: 2.5rem
 
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
import Slider from '@/components/Slider'
import StagesGrid from '@/components/StagesGrid'
import Card from '@/components/Card'
import About from '@/components/About'
export default {
  
}
</script>