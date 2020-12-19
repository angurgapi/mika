<template>
  <div class="main-block">
    <Header />
    <section id='about'>
      <div class='about-me'>
        <h2 class='section-headline'>обо мне</h2>
        
        <p>Меня зовут Мика. Я начала изучать искусство маникюра 8 лет назад, и на протяжении последних трех лет я с удовольствием посвящаю себя только этой сфере. Опыт я получала в Москве, а теперь готова радовать Вас маникюром в Оше. </p>        
      </div>

      <div class='works'>
       <Carousel />
     </div>
    
  </section>
      <div class="discounts">
      <h2 class='section-headline'>акции</h2>
      <p>Поделись ссылкой на меня в Instagram и получи скидку 5% на маникюр или педикюр</p>
    </div>
</div>    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Carousel from '@/components/Carousel'
export default {
  
}
</script>



<style>
.main-block{
  max-width: 100%;
  margin:0;
}
section{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.works{
  width: 50%;
}
#about{
  display: flex;
  width:100%;
  flex-direction: row;
  height: 700px;  
  justify-content: space-around;
  
  
}
.section-headline{
  text-align: center;
  font-weight: 600;
  color: rgba(0,0,0,.7);
}


.about-me{
  width:45%;
}
.about-me > ul{
  
  margin: auto;
  list-style: none;
  line-height: 35px;
  text-align: center;
}

@media(max-width:500px){
  
  .illustration{
  top:-310px;
  }
  .main-block{
  top:-120px;
  } 
  .about-me{
  width:90%;
  }
}

@media(max-width: 810px){
  #about{
    flex-direction: column;
    top:250px;
  }
}



</style>
