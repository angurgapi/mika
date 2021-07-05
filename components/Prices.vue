<template>
  <div class="prices section" id='prices'>    
    <h2 class="section-headline"><span class="marked">Ц</span>ены</h2>
    <div class="popup card">
        <p>Нажмите на сердечко, чтобы выбрать услугу и посмотреть итоговую сумму</p>
        <div class="close" @click='popup()'>OK</div>
    </div>
    <div class='prices__block'>      
      <Priceitem 
      v-for='item in priceitems' :key='item.id' :id='item.id' :title='item.title' :value='item.value' />
      <div class="total">Итого: {{ total }} р</div> 
    </div>   

    <div class="discounts">       
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
</template>


<style scoped lang="sass">
@font-face
    font-family: 'Amatic-Regular'
    font-style: normal
    font-weight: 600
    font-display: swap
    src: url('~assets/fonts/Amatic-Regular.ttf') format('truetype')   


.service-item
  width: 90%
  margin: auto
  margin-top: 7px
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  font-family: 'Montserrat'
  font-size: 20px
.prices__block
  min-width: 80%

.pricebox
  display: flex
  flex-direction: row
  align-items: center
.total
  margin-top: 20px
  text-align: center
  font-size: 28px
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

.popup
  width: 50vw
  position: relative
  top: 30px
  opacity: .9
  background-color: #fff
  z-index: 1010 
  padding: 1rem
  p
    font-size: 26px   
    text-align: center
    margin: auto
    font-family: 'Pangolin'

  .close
    margin: 20px auto
    background-color: rgba(135, 12, 55, 0.8)
    height: 50px
    width: 130px
    border-radius: 10px
    box-shadow: 2px 2px 5px #7a103e
    color: #fff
    font-size: 1.6rem
    font-family: 'Montserrat'
    text-align: center
    display: flex
    align-items: center
    justify-content: center

@media(max-width: 1200px)
  .discounts
    width: 90%

@media(max-width:500px)
  .share
    letter-spacing: 7px
  .service-item
    width: 95%
  .discounts
    width: 95%
    p
      font-size: 1rem
  .popup
    width: 90vw
    p
      font-size: 28px

@media(max-width:330px)
  .discount-text
    p
      line-height: 15px
      font-size: .9rem
</style>

<script>
import Priceitem from './Priceitem'
export default {
 
  data(){
    return{  
      total: 0,
      priceitems: []
    }
  },

  methods: {
    async getPrices(context){
        let response = await this.$nuxt.context.app.$storyapi.get('cdn/stories', {
            version: 'draft',
            starts_with: 'priceblock/'
        })
       
        this.priceitems = response.data.stories.map(it => {
            return {       
                title: it.content.title,
                value: it.content.value,
                id: it.id
            }
        })

    
 
    },
    popup(){
      event.target.parentNode.style.display = 'none'
    },
    calculate(){
      let sum = parseInt(event.target.previousSibling.previousSibling.textContent)
      if(event.target.checked){
        this.total += sum
      }
      else{
        this.total -= sum
      }
    }
  },
  mounted() {
    this.getPrices()
  }

}
</script>