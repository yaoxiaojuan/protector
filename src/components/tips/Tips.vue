<template>
<div>
  <Navigation/>
  <SectionIntro
    v-if="!$route.query.step"
    :content="introContent"
  />
  <a v-if="!$route.query.step" href="#/tips?step=1">GO</a>
  <ul v-else="$route.query.step === '1'">
    <li><a href="#/tips/medicine">MEDICINE</a></li>
    <li><a href="#/tips/physicsTherapy">PHYSICS THERAPY</a></li>
  </ul>
</div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import SectionIntro from '../common/SectionIntro.vue'
export default {
  name: 'Tips',
  data () {
    return {
      introContent: 'Dopamine is the human happiness factor'
    }
  },
  components: {
    Navigation,
    SectionIntro
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
