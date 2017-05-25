<template>
  <div>
    <div v-if="toggle" v-on:click="handleToggle">MENU</div>
    <ul v-else-if="!toggle">
      <li v-on:click="handleToggle">X</li>
      <li><a href="#/quiz">QUIZ</a></li>
      <li><a href="#/psychological">PSYCHOLOGICAL</a></li>
      <li><a href="#/tips">TIPS & ADVICE</a></li>
      <li><a href="#/science">SCIENCE</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      toggle: true
    }
  },
  components: {
  },
  methods: {
    handleToggle: function () {
      let toggleNew = !this.toggle
      this.toggle = toggleNew
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    padding-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    width: 50%;
    height: 100%;
    margin: 0;
    line-height: 40px;
  }
  ul li a{
    color: #fff;
    cursor: pointer;
  }
</style>
