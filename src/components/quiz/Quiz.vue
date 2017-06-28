<template>
  <div class="Quiz">
    <Navigation/>
    <SectionIntro
      v-if="!$route.query.step"
      :content="quizIntro"
    />
    <QuizContent
      v-else-if="$route.query.step === '1'"
    />
    <a v-if="!$route.query.step" href="#/quiz?step=1">GO</a>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
import SectionIntro from '../common/SectionIntro.vue'
import QuizContent from './QuizContent.vue'
export default {
  name: 'Quiz',
  data () {
    return {
      step: 0,
      quizIntro: 'Use this brief 18-question automated quiz to help you determine if your friend may need to see a mental health professional for diagnosis and treatment of depression.'
    }
  },
  components: {
    Navigation,
    SectionIntro,
    QuizContent
  },
  methods: {
    setStep: function () {
      this.step = 1
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
