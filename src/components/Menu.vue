<template>
  <div class="carousel">
    <div class="container">
      <router-link class="item" v-for="(item, index) in items" :key="index" :to="item.to" @mouseenter.native="mouseenter()">
        <h3 class="text">{{ item.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  props:{
    items: Array
  }
}
</script>
<style scoped>
.carousel{
  overflow: auto;
  width: 100%;
  background-color: #00000088;
  text-align: center;
}
.carousel .container{
  display: flex;
  padding: 0 5px;
}
.carousel .container .item{
  color: white;
  padding: 0 10px;
  cursor: pointer;
  text-shadow: 0 0 15px #ffffff;
  line-height: 0.5;
  text-decoration: none;
}
.carousel .container .item:hover, .carousel .container .item.router-link-exact-active{
  text-shadow: none;
  box-shadow: inset 0 -10px 20px 0 #227aa9, 0 0 5px 0 black;
}
</style>