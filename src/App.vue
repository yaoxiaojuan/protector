<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body, #app{
  width: 100%;
  height: 100%;
  margin: 0;
}
.layout{
  height: 100%;
  position: relative;
  padding: 40px 0;
  box-sizing: border-box;
  &:before,&:after{
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 40px;
    background: #dcdddd;
  }
  &:before{
    top: 0;
  }
  &:after{
    bottom: 0;
  }
}
.button{
  line-height: 2rem;
  background: #87cdc9;
  color: #fff;
  border: none;
  border-radius: 2rem;
  text-decoration: none;
  display: inline-block;
  margin: 1rem;
  font-weight: 700;
  font-size: 1.5rem;
  &.large{
    padding: 1rem 2rem;
  }
  &.italic{
    font-style: italic;
  }
  &.small{
    padding: 0.5rem 1.5rem;
  }
}
</style>
