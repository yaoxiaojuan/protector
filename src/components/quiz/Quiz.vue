<template>
  <div class="Quiz">
    <Navigation/>
    <SectionIntro
      v-if="step === 0"
      name="quiz"
    />
    <button
      v-if="step === 0"
      class="button large"
      v-on:click="setStep(1)"
    >GO</button>

    <QuizContent
      v-else-if="step === 1"
      v-on:setStep="setStep"
      v-on:setResult="setResult"
    />
    <QuizResult
      v-else="step"
      setStep="setStep"
      :result="result"
    />
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import SectionIntro from '../common/SectionIntro.vue'
import QuizContent from './QuizContent.vue'
import QuizResult from './QuizResult.vue'

export default {
  name: 'Quiz',
  data () {
    return {
      step: this.$route.query.step ? this.$route.query.step * 1 : 0,
      result: 0
    }
  },
  components: {
    Navigation,
    SectionIntro,
    QuizContent,
    QuizResult
  },
  methods: {
    setStep: function (step) {
      this.step = step
    },
    setResult: function (result) {
      this.result = result
    }
  }
}
</script>

<style lang="scss" scoped>
.Quiz{
  height: 100%;
  position: relative;
  padding: 40px 0;
  box-sizing: border-box;
  &:before,&:after{
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 40px;
    background: #dcdddd;
  }
  &:before{
    top: 0;
  }
  &:after{
    bottom: 0;
  }
}
</style>
