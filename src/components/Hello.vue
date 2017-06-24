<template>
  <div class="welcome">
    <div class="heart left"></div>
    <div class="seed"></div>
    <div class="heart right"></div>
    <p>{{ msg }}</p>
    <Intro v-bind:isShow='flashOver'></Intro>
  </div>
</template>

<script>
import Intro from './Intro.vue'
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'DEFENDER',
      flashOver: false
    }
  },
  components: {
    Intro
  },
  methods: {
  },
  created: function () {
    setTimeout(function () {
      this.flashOver = true
    }.bind(this), 4200)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @-webkit-keyframes leftHeart
  {
    0% {margin-left: 20rem;}
    25% {margin-left: 16rem;}
    50% {margin-left: 12rem;opacity: 0;}
    100% {margin-left: -2rem;opacity: 1;}
  }
  @-webkit-keyframes rightHeart
  {
    from {margin-right: 12rem;opacity: 0;}
    to {margin-right: -2rem;opacity: 1;}
  }
  .heart,.seed{
    top: 35%;
    margin-top: -7rem;
    height: 14rem;
    position: fixed;
  }
  .heart{
    width: 7rem;
    background: url(../assets/farmer/heart.png) no-repeat center;
    background-size: 100%;
    &.left{
      left: 50%;
      -webkit-animation: leftHeart 4s;
      margin-left: -2rem;
    }
    &.right{
      right: 50%;
      -webkit-animation: rightHeart 2s;
      margin-right: -2rem;
    }
  }
  .seed{
    width: 5rem;
    margin-top: -5.5rem!important;
    left: 50%;
    margin-left: -2.5rem;
    background: url(../assets/seed/helloSeed.png) no-repeat center;
    background-size: 100%;
    z-index: 2;
  }
  p{
    position: fixed;
    top: 55%;
    width: 100%;
    text-align: center;
    left: 0;
  }
</style>
