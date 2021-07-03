<template>
<div class='about section'>
	<div class='about__master'>
    <h1 class="section-headline"><span class='marked'>М</span>астер маникюра Махлие Умурзакова</h1>
      <div class='about__master__body'>
        <div class='about__portrait'>        
        </div>        
        <p class='about__quotation'><i>"У меня за спиной обучение, сертификация и получение опыта в салонах России и Киргизии. 
                                        <span class="about__quotation__bottom">Мое развитие
                                        продолжается, ведь мир не стоит на месте, и новых технологий и знаний становится все больше.  
                                        Сейчас я готова радовать Вас маникюром и педикюром в Москве. Оказываю все виды ногтевого 
                                        сервиса, также с радостью возьму на себя уход за цветом и формой бровей.
                                        Чего не хватает в вашем образе? Спокойных тонов, изысканности или блеска? Это ко мне!"</span></i></p>        
      </div>      
		</div>


  <div class="about__qualification">
    <h2 class="section-headline"><span class='marked'>К</span>валификация</h2>
    <QualifSlider :images=this.certificatePics />
  </div>      
</div>

    
  
</template>

<style scoped lang="sass">
.about
  max-width: 1300px
  display: grid
  grid-gap: 100px
  margin: auto
  grid-template-columns: 1fr 1fr
  &__master, &__qualification
    max-width: 600px
  @media(max-width: 1200px)
    grid-template-columns: 1fr
    &__master, &__qualification
      max-width: 80%
      margin: auto
      
  &__master
    &__body
      display: flex
      flex-direction: row  
      margin-top: 50px     
      justify-content: center
      padding: 10px

  &__portrait    
    position: relative
    min-width: 150px
    height: 150px
    border-radius: 50%  
    margin-right: 30px
    background-image: url('/img/portrait.webp')
    background-size: cover
    
  &__quotation    
    font-size: 22px    
    font-family: 'Pangolin'    
    text-align: justify
    line-height: 22px
    overflow: hidden

  
  &__qualification
    display: flex
    flex-direction: column
    align-items: center


@media(max-width: 500px)
  .about    
    &__master, &__qualification
      max-width: 100%
    &__portrait
      min-width: 100px
      height: 100px
    &__quotation    
      font-size: 1rem
      line-height: 1.1rem   
</style>

<script>

  import QualifSlider from './QualifSlider'
	export default{
    data(){
      return {
        certificatePics: [
          { src: 'img/certificates/1.webp'},{ src: 'img/certificates/2.webp'},{ src: 'img/certificates/3.webp'},{ src: 'img/certificates/4.webp'},
          { src: 'img/certificates/5.webp'},{ src: 'img/certificates/6.webp'},{ src: 'img/certificates/7.webp'},
        ],        
      }
    }
  }
</script>