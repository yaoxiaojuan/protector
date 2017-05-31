<template>
<div>
  <Navigation/>
  <SectionIntro
    v-if="!$route.query.step"
    :content="introContent"
  />
  <a v-if="!$route.query.step" href="#/tips/physicsTherapy?step=1">GO</a>
  <ul v-else="$route.query.step === '1'">
    <li>时间轴的内容</li>
  </ul>
</div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import SectionIntro from '../common/SectionIntro.vue'
export default {
  name: 'PhysicsTherapy',
  data () {
    return {
      introContent: '时间轴的介绍'
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
