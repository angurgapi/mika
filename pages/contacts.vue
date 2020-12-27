<template>
  <div class="main-block">
    <div class="contact-block">
      <h2 class='section-headline'>контакты</h2>
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

.contact-item
  display: flex
  flex-direction: row

a
  text-decoration: none
  color: rgba(0,0,0,.7)
  margin-left: 20px


.contact-block
  width: 100%
  font-size: 22px
  display: flex
  align-items: center
  flex-direction: column
  margin-bottom: 50px

@media(max-width:500px)
  .main-block
    top: -120px
  

fa
  height: 40px
  width:40px
  color: black

</style>
