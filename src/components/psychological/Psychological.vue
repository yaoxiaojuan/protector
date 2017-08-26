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
import Data from './Data.json'
export default {
  name: 'Psychological',
  data () {
    return {
      step: this.$route.query.step ? this.$route.query.step * 1 : 0,
      nav: Data.nav
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
