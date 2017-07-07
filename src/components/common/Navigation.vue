<template>
  <div>
    <span
      class="iconOpen"
      v-on:click="handleToggle"
    >=</span>
    <ul v-if="!toggle">
      <li class="iconClose" v-on:click="handleToggle">MENU</li>
      <li>
        <a class="menu1" href="#/quiz">QUIZ</a>
      </li>
      <li>
        <a class="menu2" href="#/psychological">PSYCHOLOGICAL</a>
      </li>
      <li>
        <a class="menu3" href="#/tips">TIPS & ADVICE</a>
      </li>
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

<style lang="scss" scoped>
.iconOpen{
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: -2px;
  left: 20px;
}
ul{
  padding: 0px;
  position: absolute;
  top: 0;
  left: 0;
  background: #f0eee6;
  width: 60%;
  height: 100%;
  margin: 0;
  line-height: 40px;
  list-style: none;
  z-index: 2;
  li {
    &.iconClose{
      text-align: center;
      line-height: 3rem;
      font-size: 1.2rem;
      color: #f4ae6c;
      font-weight: 700;
      padding-top: 10px;
      border-bottom: 2px solid #f4ae6c;
    }
    a{
      color: #607681;
      cursor: pointer;
      text-decoration: none;
      border-bottom: 1px solid #f4ae6c;
      display: block;
      margin: 0 20px;
      text-align: left;
      line-height: 5rem;
      position: relative;

    }
    @for $i from 1 through 3{
      .menu#{$i}:after{
        content: '';
        display: block;
        width: 5rem;
        height: 5rem;
        position: absolute;
        right: -10px;
        top: 0;
        background: url(../../assets/farmer/menu#{$i}.png) no-repeat center;
        background-size: 100%;
      }
    }
    .menu2:after{
      background: url(../../assets/farmer/menu2-2.png) no-repeat center;
      background-size:80%;
    }
  }
}
</style>
