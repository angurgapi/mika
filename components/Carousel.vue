<template>
	<div class="carousel" @click="showSlides(1)">
		<div class="slideshow-container">
			

  <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <img src="img/nude/black.jpeg">
          <div class="caption-text">однотонное покрытие</div>
        </div>

        <div class="mySlides fade">   
           <img src="img/nude/short.jpeg">
            <div class="caption-text">шеллак на коротких ногтях</div>
        </div>

        <div class="mySlides fade">
            <img src="img/nude/white.jpeg">
            <div class="caption-text">дизайн-элементы</div>
        </div>

  <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
<br>

<!-- The dots-->
      <div style="text-align:center">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>

  </div>

</template>

<script>
export default{
	data(){
    	return{
    		
    	}
  	},
  	created(){
  	},

 	methods:{
	    plusSlides(n) {
	      showSlides(slideIndex += n);
	    },

	    currentSlide(n) {
	      showSlides(slideIndex = n);
	    },

	    showSlides(n) {
	      console.log('showing them slides!')
	      let slideIndex = 1;
	      let i = 0;
	      let slides = document.getElementsByClassName("mySlides");
	      let dots = document.getElementsByClassName("dot");
	      if (n > slides.length) {slideIndex = 1}
	      if (n < 1) {slideIndex = slides.length}
	      for (let i = 0; i < slides.length; i++) {
	          slides[i].style.display = "none";
	      }
	      for (let i = 0; i < dots.length; i++) {
	          dots[i].className = dots[i].className.replace(" active", "");
	      }
	      slides[slideIndex-1].style.display = "block";
	      dots[slideIndex-1].className += " active";
	    }
  	}  

}
</script>


<style>
	/* Slideshow container */

.carousel{
	width: 100%;
	height: 100%;
}
.slideshow-container {  
  width:100%;
  height: 100%;
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.mySlides {
  display: none;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.caption-text {
  color: rgba(0,0,0,.5);
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: -20px;
  width: 100%;
  text-align: center;
}


/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
.mySlides > img{
  width: 100%;
}
@media(min-width: 800px){
  .mySlides > img{
    width: 450px;
  }
}
</style>