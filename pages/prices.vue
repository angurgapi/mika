<template>
  <div class="main-block">  
    <h2 class='section-headline'>цены</h2>
    
    <div class='prices-block'>

      <div v-for="(position, index) in allPositions" class="service-item">
            <p class='position'>{{ position.title }} </p>    
            
            <div class="pricebox">
              <p class="price">{{ position.price }} <span>c</span></p>
              <input class='invisible' type="checkbox" :id="`${index}`" @click='calculate()'>
              <label class='heart' :for="`${index}`"></label>
            </div>  
      </div>
      <div class="total">Итого: {{ total }} <span>c</span></div> 
     
    </div>     

    <div class="discounts">
      <h2 class='section-headline'>акции</h2>
      
      <div class="coupon">
        <div class="discount-text">        
          <h4>-25%</h4>
          <p class="share">Поделись</p>
          <p>ссылкой на меня в Instagram и получи скидку 25% на маникюр или педикюр</p>
        </div>
        <img src='/img/rollover.jpg'/>
      </div>
      
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
      {title: 'Педикюр + покрытие', price: 1200},
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
      {title: 'Французский маникюр', price: 200},
      {title: 'Аппаратный маникюр без покрытия', price: 300},
      {title: 'Аппаратный педикюр без покрытия', price: 650},
      {title: 'Комбинированный маникюр без покрытия', price: 300},
      {title: 'Маникюр и любой дизайн гель-лаком', price: 700},      
      ],
      total: 0
    }
  },
  methods: {
    calculate(){
      let sum = parseInt(event.target.parentNode.firstChild.textContent)
      if(event.target.checked){
        this.total += sum
      }
      else{
        this.total -= sum
      }
    }
  }
  
}
</script>



<style scoped lang="sass">
@font-face
    font-family: 'Rubik'
    font-style: normal
    font-weight: 600
    font-display: swap
    src: url('~assets/fonts/Rubik.ttf') format('truetype')
@font-face
    font-family: 'Amatic-Regular'
    font-style: normal
    font-weight: 600
    font-display: swap
    src: url('~assets/fonts/Amatic-Regular.ttf') format('truetype')   
.main-block
  max-width: 100%
  margin: 0
  display: flex
  flex-direction: column
  align-items: center

.service-item
  width: 90%
  margin: auto
  margin-top: 7px
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  font-family: Pangolin
  font-size: 24px
.prices-block
  min-width: 80%
.position
  color: rgba(0,0,0,.8)
  width: 65%
.price
  margin-left: 20px
  margin-right: 15px
  min-width: 70px
  text-align: right
  span
    text-decoration: underline
.pricebox
  display: flex
  flex-direction: row
  align-items: center

.total
  margin-top: 20px
  text-align: center
  font-size: 22px
  font-family: 'Pangolin'
  span
    text-decoration: underline

.discounts
  margin: 40px auto 30px auto


.coupon
  background-color: rgb(219, 195, 206)
  display: flex
  flex-direction: row
  align-items: center  
  img
    width: 60%    
    height: auto

.discount-text
  text-transform: uppercase
  width: 40%
  padding: 13px
  max-height: 100%
  overflow-y: hidden
  p    
    color: rgba(0,0,0,.9)
    opacity: .8
    font-family: Amatic-Regular
    font-size: 40px
    text-align: center

h4
  text-align: center
  font-family: Amatic-Regular
  font-size: 56px
  font-weight: 800

.share
  letter-spacing: 10px
  font-weight: 600
  width: 100%
  text-align: center

.invisible
  position: relative
  z-index: -1000
  left: 20px
  overflow: hidden
  clip: rect(0 0 0 0)
  height: 1px
  width: 1px 
  margin: -1px 
  padding: 0
  border: 0

input[type=checkbox]:checked + .heart
  background-position: 0 -35px
         
.heart
  padding-left: 40px
  height: 35px
  // display: inline-block
  line-height: 35px
  background-repeat: no-repeat
  background-position: 0 0
  font-size: 35px
  vertical-align: middle
  cursor: pointer 
  background-image: url('/img/hrts.png')
  -webkit-touch-callout: none
  -webkit-user-select: none 
  -moz-user-select: none
  user-select: none

@media(max-width: 1200px)
  .discounts
    width: 90%

@media(max-width:500px)
  .share
    letter-spacing: 7px
  .service-item
    width: 95%
  .position
    width: 70%
    font-size: 20px
  .price
    margin-left: 5px
    margin-right: 10px
  .main-block
    top: -120px
  .discounts
    width: 95%
    p
      font-size: 1rem

  span
    font-size: 14px

@media(max-width:330px)
  .price
    font-size: 18px
    min-width: 55px
  .discount-text
    p
      font-size: .8rem
</style>
