<template>
  <div>
    <Menu></Menu>
    <QuizIntro v-if="step===0"></QuizIntro>
  </div>
</template>

<script>
import Menu from '../common/Menu.vue'
import QuizIntro from './QuizIntro.vue'
export default {
  name: 'Quiz',
  data () {
    return {
      step: 0
    }
  },
  components: {
    Menu,
    QuizIntro
  },
  methods: {
    setStep: function (step) {
      this.step = step
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
