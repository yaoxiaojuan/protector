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

    <SectionNav
      v-if="step === 1"
      :nav="nav"
    />
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import SectionIntro from '../common/SectionIntro.vue'
import SectionNav from '../common/SectionNav.vue'
export default {
  name: 'Psychological',
  data () {
    return {
      step: this.$route.query.step ? this.$route.query.step : 0,
      nav: [
        {name: 'UnderDepression', href: '#/psychological/underDepression'},
        {name: 'TreatmentOptions', href: '#/psychological/treatmentOptions'},
        {name: 'FAQ', href: '#/psychological/fa'}
      ]
    }
  },
  components: {
    Navigation,
    SectionIntro,
    SectionNav
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
