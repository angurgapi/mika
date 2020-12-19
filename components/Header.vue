<template>
  <div class='header'>
    <div class="navpannel">
        <div class="logo-block">
          <img class='logo-img' src="img/nail_logo.png">
          <div class="mikanails">mika nails</div>
        </div>
        <div class="navbar">
          <ul>
            <li class="nav-link"><a href='#about'>мастер</a></li>
            <li class="nav-link"><a href='#service'>услуги</a></li>
            <li class="nav-link"><a href='#contacts'>контакты</a></li>
          </ul>
        </div>
      </div>
    <div class="illustration">
        <img src="img/ladies.png">
      </div>
 </div>
</template>

<style>

@font-face{
  font-family: 'Comfortaa';
  src: local('Comfortaa-Medium'),
  url(~assets/Comfortaa-Medium.ttf); 
}


a{

}
.header{
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, rgba(237, 220, 227, 1) 0%, rgba(237, 220, 227, .2) 50%, rgba(230, 185, 181,1) 100%);
}
.navpannel{
/*  margin-top:20px;*/
  height: 100px;
  width: 100%;
  padding: 0 1.5rem 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-block{
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(0,0,0,.9);
}
.logo-img{
  height: 30px;
  width: 32px;
}
.mikanails{
  font-family: 'Comfortaa';
  text-align: center;
  font-size: 18px;
}
.navbar{
  width: 40%;
  justify-content: space-around;
}
.navbar > ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  list-style: none;
  padding-left: 0;
}

.nav-link a{
  text-decoration: none;
  color: rgba(0,0,0,.7);
  font-family: 'Comfortaa';
  font-size:24px;
  font-weight: 500;
  color: rgba(0,0,0,.7);
}
.nav-link a:hover, .nav-items a:active, .nav-items a.nuxt-link-active {
    color:rgba(87, 23, 30, .5);
  }

@media(max-width: 500px){
  .navbar > ul{
    flex-direction: column;
  }
  .nav-link a{
    font-size: 22px;
  }
}
.illustration{
  z-index:1000;
  display: flex;
  justify-content: center;

}

.illustration > img{
  height: 15em;
  width: 17em;
}

</style>