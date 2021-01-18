<template>
  <div class="main-block">
    <div class="contact-block">
  
      <div class="contact-list">
            <h2 class='section-headline'>связаться со мной</h2>
      <div class="contact-item">      
        <font-awesome-icon :icon="['fas', 'phone']"/>
        <font-awesome-icon :icon="['fab', 'whatsapp']" style='margin-left: 10px; color: #04c240'/>
        <a href="tel:+79104923737">8-910-492-37-37</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fab', 'instagram']" style='color: #d45d83'/>
        <a target='_blank' href="https://www.instagram.com/beautiful_nails_at_home">beautiful_nails_at_home</a>
      </div>
      <div class="contact-item">
        <font-awesome-icon :icon="['fab', 'vk']" style='color: #1e93b0'/>
        <a href="https://vk.com/id443314033" target="_blank">Махлие Умурзакова</a>
     </div>
      </div>

      <div class='map'><a href="https://yandex.ru/maps/10312/djalal-abad/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Джалал‑Абад</a><a href="https://yandex.ru/maps/geo/771293475/?ll=72.988245%2C40.936758&utm_medium=mapframe&utm_source=maps&z=12.4" style="color:#eee;font-size:12px;position:absolute;top:14px;">Джалал-Абад — Яндекс.Карты</a><iframe src="https://yandex.ru/map-widget/v1/-/CCUI5JVygC" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>

      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="sass">
.main-block
  max-width: 100%
  margin: 0
  display: flex
  justify-content: center
  align-items: center

.contact-block
  margin: 40px auto 70px auto
  width: 90%
  font-size: 28px
  display: flex
  align-items: center
  justify-content: center
  flex-direction: row
  margin-bottom: 50px
  overflow: hidden

.contact-item
  display: flex
  flex-direction: row
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
