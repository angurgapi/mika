<template>
  <div class="main-block">
    
    <div class='about'>

      <div class='about-me'>
        <div class="heading">
          <div class='portrait'></div>
          <h2 class='section-headline'>обо мне</h2>
        </div>
        <p>Меня зовут Мика. Я начала изучать искусство маникюра 8 лет назад, и на протяжении последних трех лет с удовольствием посвящаю себя только этой сфере. Опыт я получала в Москве, а теперь готова радовать Вас маникюром и педикюром в Джалал-Абаде. Работаю с покрытием, формой, длиной и дизайном, 
        давайте исполнять Ваши желания вместе!</p>        
      </div>

      <div class='works'>
        <h2 class="section-headline">мои работы</h2>
       <Slider />
     </div>    
    </div>

   
</div>    
  </div>
</template>

<script>
import Slider from '@/components/Slider'
export default {
  
}
</script>



<style lang='sass'>

@font-face
    font-family: 'Pangolin'
    font-style: normal
    font-weight: 500
    font-display: swap
    src: url('~assets/fonts/Pangolin.ttf') format('truetype')

.main-block
  max-width: 100%
  margin: 0

.works
  width: 50%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  overflow: hidden

.about
  display: flex
  width: 100%
  flex-direction: row
  // height: 700px
  justify-content: space-between
  margin-bottom: 30px

.about-me
  overflow: hidden
  margin: 0 auto auto 90px
  width:40%
  font-size: 22px
  text-align: center

.about-me p
  font-family: 'Pangolin'
  font-size: 26px
  text-align: justify

.heading
  width: 70%
  height: 230px
  display: flex
  flex-direction: row
  justify-content: space-between

.portrait
  height: 150px
  width: 150px
  border-radius: 50%
  background-image: url('/img/port.jpeg')
  transform: rotate(-25deg)
  background-size: cover
  position: relative
  top: 40px

.mikanails
  overflow: hidden

.discounts
  width: 50%
  font-size: 22px


@media(max-width:500px)
  .illustration
    top: -310px
  
  .works, .about-me
    width: 95%
    margin: auto
  
  img
    width: 350px
  
  .main-block
    top: -120px

  .works
    margin-top: 30px

@media(max-width: 810px)
  .about
    flex-direction: column
    top: 250px

  .works, .about-me
    width: 90%
    margin: auto
  .works
    margin-top: 30px
</style>
