<template>
  <div>
    <Navigation/>
    <SectionIntro
      v-if="!$route.query.step"
      :content="psychologicalIntro"
    />
    <a v-if="!$route.query.step" href="#/psychological?step=1">GO</a>
    <ul v-else="$route.query.step === '1'">
      <li><a href="#/psychological/underDepression">UnderDepression</a></li>
      <li><a href="#/psychological/treatmentOptions">TreatmentOptions</a></li>
      <li><a href="#/psychological/faq">FAQ</a></li>
    </ul>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import SectionIntro from '../common/SectionIntro.vue'
export default {
  name: 'Psychological',
  data () {
    return {
      step: this.$route.query.step,
      psychologicalIntro: 'The most sensible way to lower rates of depression is...to spread accurate information among the general public about what depression is '
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
