<template>
  <div class="layout">
    <Navigation/>
    <div class="article">
      <div class="pageTitle">
        <img src="../../assets/farmer/article-top.png">
        <span>UNDERSTANDING DEPRESSION</span>
      </div>
      <div class="overview">
        <span class="strong"> BRIEF</br> OVERVIEW</br></span>
        <span class="little"> LESSION-1 </span>
      </div>
      <div class="brif">
        <p>There’s so much information out there on clinical depression. Thousands of studies, insights into the causes, symptoms, methods of testing, biological causes and effects and so on...
        </p>
        <p>
        Unfortunately, this is rarely made available in a straight forward way to those who need it most; those suffering from depression and their friends and family. That is the aim of this app.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
export default {
  name: 'Article',
  data () {
    return {
      toggle: true
    }
  },
  components: {
    Navigation
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
$RED: #ef898b;
$GREEN: #87cdc9;
.article{
  width: 90%;
  margin: 1em auto;
  .pageTitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: .6em;
      border-bottom: 1px solid $RED;
    }
    img{
      width: 4em;
      display: block;
      margin: auto;
    }
    span{
      color: $RED;
      font-size: .8em;
      background: #fff;
      z-index: 1;
      padding: 0 1em;
      font-style: italic;
    }
  }
  .overview{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8em;
    height: 8em;
    margin: 2em auto;
    border-radius: 50%;
    background: $GREEN;
    color: #fff;
    font-style: italic;
    .strong{
      font-size: 1.2em;
      font-weight: 700;
    }
    .little{
      font-size: .7em;
    }
  }
  .brif{
    text-align: left;
    hyphens: auto;
  }
}
</style>
