<template>
<div class="service-item">
   <h2 class="position">{{ title }}</h2>
   <p class="price">{{ value }} <span>р</span></p>
   <input class='invisible' type="checkbox" :id="`${id}`" @click='calculate()'>
   <label class='heart' :for="`${id}`"></label>      
</div>
</template>

<style lang='sass'>
.service-item
  display: flex
  flex-direction: row
  align-items: center
.position
  color: rgba(0,0,0,.8)
  width: 65%
  font-size: 24px
.price
  margin-left: 20px
  margin-right: 15px
  min-width: 70px
  text-align: right
  span
    text-decoration: underline
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
@media(max-width:500px)
  .position
    width: 70%
    font-size: 20px
  .price
    margin-left: 5px
    margin-right: 10px
@media(max-width:330px)
  .price
    font-size: 18px
    min-width: 55px
</style>

<script>
	export default{
		props: {
			title: {
				type: String,
				required: true
			},
			value: {
				type: String,
				required: true
			},
			id: {
				type: Number,
				required: true
			}
		},
		methods:{
			calculate(){				
				this.$parent.calculate()
			}
		}
	}
</script>