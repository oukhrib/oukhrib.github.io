import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Projects from './views/Projects'
Vue.mixin({
  methods: {
    async mouseenter(){
      const mouseEnterAudio = await require("./assets/sounds/mouseenter.mp3");
      console.log(mouseEnterAudio);
      const audio = new Audio(mouseEnterAudio);
      audio.play();
    },
    async swipe(){
      const swipeAudio = await require("./assets/sounds/swipe.mp3");
      const audio = new Audio(swipeAudio);
      audio.play();
    }
  }
})
Vue.config.productionTip = false;
const routes = [
  { path: '/projects', component: Projects }
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
Vue.use(VueRouter);
new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')