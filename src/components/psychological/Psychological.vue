<template>
  <div>
    <Navigation/>
    <SectionIntro
      v-if="step === 0"
      :content="psychologicalIntro"
    />
    <div v-if="step === 0" v-on:click="handleStep">GO</div>
    <ul v-else-if="step === 1">
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
      step: 0,
      psychologicalIntro: 'The most sensible way to lower rates of depression is...to spread accurate information among the general public about what depression is '
    }
  },
  components: {
    Navigation,
    SectionIntro
  },
  methods: {
    handleStep: function () {
      this.step = 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
