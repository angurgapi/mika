<template>
<div class='about'>
	<div class='about-left'><p class="greeting" style="align: left"><span class='marked'>П</span>риветствую! <br> Меня зовут Махлие, для друзей - Мика.</p>
		<div class='me'>
			<p><i>это<br> я</i></p>
			<img src='/img/curved-arrow.svg'>
			<div class='portrait'></div>
		</div>
    </div>
	<div class="about-right"><p>Больше трех лет назад я решила посвятить себя маникюру, расти и развиваться в этом направлении. У меня за спиной обучение, сертификация и получение опыта в салонах Москвы, а сейчас я готова радовать Вас маникюром и педикюром в Джалал-Абаде. Чего не хватает в вашем образе? Спокойных тонов, изысканности или блеска? Это ко мне!</p></div>
</div>
</template>

<style scoped lang="sass">
.about
  display: flex
  width: 80%
  flex-direction: row
  justify-content: space-between
  margin: 80px auto 90px auto
  .about-right, .about-left 
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
.me
  width: 100%
  height: 250px
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  overflow: hidden
  p
    font-size: 25px
    width: 25%
    text-transform: uppercase
    font-family: 'Pangolin'
    transform: rotate(-5deg)
    text-align: center
  img
    height: 50px
    width: 50px
    transform: rotate(45deg)
    margin-right: 10px
.about-left
  width: 45%
  .greeting
    font-size: 2rem
    font-weight: 400
    text-align: left
.about-right
  width: 50%
  p
    font-size: 30px
    text-align: justify
svg
  height: 40px
  width: 40px
.portrait
  height: 150px
  width: 150px
  border-radius: 50%
  background-image: url('/img/port.webp')
  transform: rotate(-25deg)
  background-size: cover
  position: relative
  top: 10px
  margin-left: 10px
@media(max-width: 800px)
  .about
    flex-direction: column
    .about-left, .about-right
      width: 100%
@media(max-width: 500px)
  .portrait
    width: 120px
    height: 120px
</style>

<script>
	export default{}
</script>