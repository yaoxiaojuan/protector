<template>
  <div>
    <Navigation/>
    <QuizIntro
      v-if="step === 0"
    />
    <QuizContent
      v-else-if="step === 1"
    />
    <div v-if="step === 0" v-on:click="setStep">GO</div>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import QuizIntro from './QuizIntro.vue'
import QuizContent from './QuizContent.vue'
export default {
  name: 'Quiz',
  data () {
    return {
      step: 0
    }
  },
  components: {
    Navigation,
    QuizIntro,
    QuizContent
  },
  methods: {
    setStep: function () {
      this.step = 1
    }
  }
}
</script>

<style scoped>

</style>
