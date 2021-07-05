<template>
  <div class="contacts section" id='contacts'>
    <div class="contact-block">
  
      <div class="contact-list">
            <h2 class='section-headline'><span class="marked">С</span>вязаться со мной</h2>
      <div class="contact-item">      
        <font-awesome-icon :icon="['fas', 'phone']"/>
        <font-awesome-icon :icon="['fab', 'whatsapp']" style='margin-left: 10px; color: #04c240'/>
        <a href="tel:+79104923737">8-910-492-37-37</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fab', 'instagram']" style='color: #d45d83'/>
        <a target='_blank' href="https://www.instagram.com/glass_nails_msk/">glass_nails_msk</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fab', 'vk']" style='color: #1e93b0'/>
        <a href="https://vk.com/id443314033" target="_blank">Махлие Умурзакова</a>
     </div>
      </div>

      <div class='map' style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a href="https://yandex.ru/maps/213/moscow/?ll=37.666394%2C55.869765&utm_medium=mapframe&utm_source=maps&z=16.24" style="color:#eee;font-size:12px;position:absolute;top:14px;">Москва — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUeuNBUdD" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>

      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="sass">
.contact-block
  margin: 40px auto 70px auto
  width: 90%
  font-size: 28px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: row
  margin-bottom: 100px
  overflow: hidden

.contact-item
  display: flex
  flex-direction: row
  height: 40px
a
  text-decoration: none
  color: rgba(0,0,0,.7)
  margin-left: 20px
  
.map
  position: relative
  top: 30px
  overflow: hidden
  margin-left: 50px
  display: flex
  justify-content: center
  iframe
    width: 460px
    height: 300px

@media(max-width:1036px)
  .contact-block
    width: 95%
    flex-direction: column
    font-size: 24px
  .map
    width: 95%
    margin: 30px 5px 30px 5px

@media(max-width:500px)
  .main-block
    top: -120px
  .map
    iframe
      width: 100%
      height: auto
fa
  height: 40px
  width: 40px
  color: black

</style>
