<template>
<div>
  <Navigation/>
  <ul>
    <li><a href="#/tips/medicine/1">药物1</a></li>
    <li><a href="#/tips/medicine/2">药物2</a></li>
  </ul>
</div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
export default {
  name: 'Medicine',
  data () {
    return {
    }
  },
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
