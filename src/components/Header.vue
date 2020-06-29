<template>
  <div class="header">
    <img class="cover" src="@/assets/images/cover.jpg">
    <div class="info">
      <img  @mouseenter="swipe" class="profile" src="@/assets/images/profile.jpg">
      <h1 @mouseenter="swipe">{{ name }}</h1>
      <div class="social-media">
        <a href="https://www.facebook.com/ArtistAbdo" class="facebook" @mouseenter="mouseenter()"></a>
        <span class="link">Facebook.com/ArtistAbdo</span>
        <a href="https://www.instagram.com/abderrahimoukhrib" class="instagram" @mouseenter="mouseenter()"></a>
        <span class="link">Instagram.com/abderrahimoukhrib</span>
        <a href="https://www.linkedin.com/in/abderrahimoukhrib" class="linkedin" @mouseenter="mouseenter()"></a>
        <span class="link">Linkedin.com/in/abderrahimoukhrib</span>
        <a href="https://github.com/oukhrib" class="github" @mouseenter="mouseenter()"></a>
        <span class="link">Github.com/oukhrib</span>
      </div>
      <Menu :items="menu" />
    </div>
  </div>
</template>
<script>

import Menu from './Menu'
export default {
  name: 'Header',
  components:{
    Menu
  },
  data() {
    return {
      name: 'Abderrahim Oukhrib',
      menu:[
      { name: "About", to: "/"},
      { name: "Projects", to: "/projects"},
      { name: "Experiances", to: "/experiances"},
      { name: "Hobbies", to: "/hobbies"},
      { name: "Contact", to: "/contact"},
      ]
    }
  },
}
</script>
<style>
.header{position: relative;display: flex;flex-direction: column;justify-content: center;align-items: center;}
.header .cover{
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
.header .info{
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #000000aa;
    padding-top: 1rem;
}
.header .info .profile{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    object-fit: cover;
    border: 5px solid #ffffff;
    box-shadow: 0 0 10px 0px #ffffff;
    cursor: pointer;
    transition: 0.5s;
}
.header .info .profile:hover{
    box-shadow: 0 0 70px 0px #ffffff22;
}
.header .info h1{
    color: white;
    text-shadow: 0 0 15px #ffffff;
    cursor: pointer;
    transition: 0.5s;
}
.header .info h1:hover{
  text-shadow: 0 0 100px #ffffff;
}
.social-media{
    display: flex;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: 2px solid white;
    padding: 5px;
    border-radius: 30px;
    position: relative;
}
.social-media a{
    display: inline-block;
    width: 50px;
    height: 50px;
    background-color: white;
    box-shadow: 0 0 10px 2px white;
    margin: 0 5px;
    border-radius: 25px;
    background-size: 30px;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
}
.social-media .link{
    position: absolute;
    bottom: -24px;
    left: -20px;
    right: -20px;
    text-align: center;
    color: #a1e4ff;
    display: none;
}
.social-media a:hover{
    animation: updown .5s;
}
.social-media a:hover + .link{
    display: block;
}
.social-media a.facebook{
    background-image: url(../assets/icons/facebook.svg);
}
.social-media a.linkedin{
    background-image: url(../assets/icons/linkedin.svg);
}
.social-media a.instagram{
    background-image: url(../assets/icons/instagram.svg);
}
.social-media a.github{
    background-image: url(../assets/icons/github.svg);
}

@keyframes updown{
    0% { top: 0px; box-shadow: 0px 0px 10px 2px #ffffffc2;}
    12% { top: -10px; box-shadow: 0px 10px 15px 2px #ffffffc2;}
    24% { top: -15px; box-shadow: 0px 14px 20px 2px #ffffffc2;}
    36% { top: -10px; box-shadow: 0px 10px 15px 2px #ffffffc2;}
    48% { top: 0px; box-shadow: 0px 0px 10px 2px #ffffffc2;}
    60% { top: -5px; box-shadow: 0px 5px 5px 2px #ffffffc2;}
    82% { top: 0px; box-shadow: 0px 0px 20px 2px #ffffffc2;}
    90% { top: -2px; box-shadow: 0px 2px 10px 2px #ffffffc2;}
    100% { top: 0px; box-shadow: 0px 0px 10px 2px #ffffffc2;}
}

@media only screen and (max-width: 600px) {

}
</style>