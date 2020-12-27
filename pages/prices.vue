<template>
  <div class="main-block">  
    <h2 class='section-headline'>цены</h2>
    
    <div class='prices-block'>

      <div v-for="(position) in allPositions" class="service-item">
            <p class='position'>{{ position.title }} </p>    
            <p class="price">{{ position.price }} <span>c</span></p>     
      </div> 
     
    </div>     

    <div class="discounts">
      <h2 class='section-headline'>акции</h2>
      <p>Поделись ссылкой на меня в Instagram и получи скидку 5% на маникюр или педикюр</p>
    </div>
</div>    
  </div>
</template>

<script>
export default {
  data(){
    return{      
      allPositions:[
      {title: 'Маникюр + однотонное покрытие гель-лаком', price: 700},
      {title: 'Маникюр + покрытие гель-лаком (френч)', price: 900},
      {title: 'Педикюр + гель-лак', price: 500},
      {title: 'Наращивание одного ногтя', price: 100},
      {title: 'Реставрация одного ногтя', price: 50},
      {title: 'Снятие покрытия', price: 100},
      {title: 'Снятие нарощенных ногтей', price: 200},
      {title: 'Наращивание полигелем', price: 1500},
      {title: 'Покрытие гель-лаком', price: 400},
      {title: 'Наращивание одного ногтя', price: 100},
      {title: 'Стразы', price: 50},
      {title: 'Простой дизайн', price: 0},
      {title: 'Моделирование ногтей', price: 1600},
      {title: 'Френч', price: 200},
      {title: 'Аппаратный маникюр без покрытия', price: 300},
      {title: 'Аппаратный педикюр без покрытия', price: 450},
      {title: 'Комбинированный маникюр без покрытия', price: 300},
      {title: 'Маникюр и любой дизайн гель-лаком', price: 700},      
      ]
    }
  }
  
}
</script>



<style scoped lang="sass">
.main-block
  max-width: 100%
  margin: 0
  display: flex
  flex-direction: column
  align-items: center

.service-item
  width: 90%
  margin: auto
  display: flex
  flex-direction: row
  justify-content: space-between
  font-family: Pangolin
  font-size: 24px

.position
  color: rgba(0,0,0,.8)
.price
  margin-left: 20px
  min-width: 60px
  text-align: right

.discounts
  margin-top: 40px
  width: 50%
  font-size: 22px
  font-family: Pangolin
  margin-bottom: 30px

  p
    text-align: justify
span
  text-decoration: underline

@media(max-width:500px)
  
  .main-block
    top: -120px
  
  span
    font-size: 14px


@media(max-width: 810px)


</style>
