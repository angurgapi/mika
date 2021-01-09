<template>
  <div class="main-block">  
    <h2 class='section-headline'>цены</h2>
    
    <div class='prices-block'>
      
      <Priceitem 
      v-for='item in priceitems' :title='item.title' :value='item.value' :id='item.id' />
   

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
import Priceitem from '@/components/Priceitem'


export default {
  asyncData(context){
    return context.app.$storyapi
    .get('cdn/stories',
    {
      version: 'draft',
      starts_with: 'priceblock/'
    })
    .then(res => {
      console.log(typeof(res.data.stories[0].id))
      return{
      priceitems: res.data.stories.map(it => {
        return {       
        title: it.content.title,
        value: it.content.value,
        id: it.id
      }
      })
    }
    })
  },

  data(){
    return{      
  
      total: 0
    }
  },

  methods: {
    calculate(){

      let sum = parseInt(event.target.previousSibling.previousSibling.textContent)
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



@media(max-width: 1200px)
  .discounts
    width: 90%

@media(max-width:500px)
  .share
    letter-spacing: 7px
  .service-item
    width: 95%
  .main-block
    top: -120px
  .discounts
    width: 95%
    p
      font-size: 1rem

  span
    font-size: 14px

@media(max-width:330px)
  .discount-text
    p
      font-size: .8rem
</style>
