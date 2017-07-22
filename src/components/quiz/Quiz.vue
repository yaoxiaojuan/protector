<template>
  <div class="Quiz">
    <Navigation/>
    <SectionIntro
      v-if="!$route.query.step"
      name="quiz"
    />
    <a
      class="button large"
      v-if="!$route.query.step"
      href="#/quiz?step=1"
    >GO</a>

    <QuizContent
      v-else-if="$route.query.step === '1'"
    />
    <QuizResult
      v-else="$route.query.step === '2'"
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
      step: 0
    }
  },
  components: {
    Navigation,
    SectionIntro,
    QuizContent,
    QuizResult
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
