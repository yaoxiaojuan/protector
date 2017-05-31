<template>
  <div>
    <Navigation/>
    <a href="#/psychological?step=1">《《《</a>
    <h1>FAQ</h1>
    <ul>
      <li><a href="#/psychological/underDepression/1">问题1</a></li>
      <li><a href="#/psychological/underDepression/2">问题2</a></li>
      <li><a href="#/psychological/underDepression/3">问题3</a></li>
      <li><a href="#/psychological/underDepression/4">问题4</a></li>
      <li><a href="#/psychological/underDepression/5">问题5</a></li>
    </ul>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
export default {
  name: 'TreatmentOptions',
  components: {
    Navigation
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
