<template>
  <div>
    <Navigation/>
    <a href="#/psychological?step=1">《《《</a>
    <h1>FAQ</h1>
    <ul>
      <li v-for="item in data.faqList"><a :href='"#/psychological/underDepression/"+item.id'>{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import Data from './psyData.json'

export default {
  name: 'TreatmentOptions',
  data: function () {
    return {
      data: Data
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
<style scoped lang="scss">
  div{
    h1{
      color: red;
    }
  }
</style>
