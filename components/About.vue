<template>
<div class='about section'>
	<div class='about__master section'>
    <h1 class="section-headline"><span class='marked'>М</span>астер маникюра Махлие Умурзакова</h1>
      <div class='about__master__body'>
        <div class='about__portrait'>        
        </div>        
        <p class='about__quotation'><i>"У меня за спиной обучение, сертификация и получение опыта в салонах России и Киргизии.
                                        Сейчас я готова радовать Вас маникюром и педикюром в Москве. Оказываю все виды ногтевого 
                                        сервиса, также с радостью возьму на себя уход за цветом и формой бровей.
                                        Чего не хватает в вашем образе? Спокойных тонов, изысканности или блеска? Это ко мне!"</i></p>        
      </div>      
		</div>
  <div class='about__media section'>
    <div class="about__media__body"> 
      <div class="about__qualification">
        <h2 class="section-headline"><span class='marked'>К</span>валификация</h2>
        <QualifSlider :images=this.certificatePics />
      </div>
      <div class="about__works">
        <h2 class="section-headline"><span class='marked'>Р</span>аботы</h2>        
        <WorkSlider :images=this.portfolioPics />
      </div>
    </div>
    
  </div>
</div>
</template>

<style scoped lang="sass">
.about
  display: flex  
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
    background-image: url('/img/portrait.jpg')
    background-size: cover
    
  &__quotation    
    font-size: 22px    
    font-family: 'Pangolin'    
    text-align: justify
    max-width: 60% 

  &__media
    &__body
      display: grid
      grid-template-columns: 1fr 1fr     
      @media(max-width: 1000px)
        grid-template-columns: 1fr
  &__qualification, &__works
    display: flex
    flex-direction: column
    align-items: center


@media(max-width: 500px)
  .about    
    &__portrait
      min-width: 100px
      height: 100px
    &__quotation    
      font-size: 1rem    
</style>

<script>
  import WorkSlider from './WorkSlider'
  import QualifSlider from './QualifSlider'
	export default{
    data(){
      return {
        certificatePics: [
          { src: 'img/certificates/1.webp'},{ src: 'img/certificates/2.webp'},{ src: 'img/certificates/3.webp'},{ src: 'img/certificates/4.webp'},
          { src: 'img/certificates/5.webp'},{ src: 'img/certificates/6.webp'},{ src: 'img/certificates/7.webp'},
        ],
        portfolioPics: [
          {
		        src: 'img/portfolio/black.jpeg',
		        title:'нюд'
          },
          {
          	src: "img/portfolio/1.jpg",
          	title:''
          },
          {
           	src: "img/portfolio/white.jpeg",
           	title:'дизайн-элементы'
          },
          {
           	src: "img/portfolio/3.jpg",
           	title: ''
          },       
          {
          src: 'img/portfolio/2.jpg',
          title: ""
          },
          {
           	src: "img/portfolio/4.jpg",
           	title: ''
          },          
        ],
      }
    }
  }
</script>