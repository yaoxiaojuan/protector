<template>
  <div class="layout Psychological">
    <Navigation/>
    <SectionIntro
      v-if="step === 0"
      name="psychological"
    />
    <button
      v-if="step === 0"
      class="button large"
      v-on:click="setStep(1)"
    >GO</button>

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
      step: this.$route.query.step ? this.$route.query.step : 0
    }
  },
  components: {
    Navigation,
    SectionIntro
  },
  methods: {
    setStep: function (step) {
      this.step = step
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
