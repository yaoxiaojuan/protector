<template>
  <div class="Quiz">
    <Navigation/>
    <SectionIntro
      v-if="!$route.query.step"
      name="quiz"
    />
    <QuizContent
      v-else-if="$route.query.step === '1'"
    />
    <a class="button" v-if="!$route.query.step" href="#/quiz?step=1">GO</a>
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
      step: 0
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
  .button{
    padding: 1rem 2rem;
    line-height: 2rem;
    background: #87cdc9;
    color: #fff;
    border-radius: 2rem;
    text-decoration: none;
    display: inline-block;
    margin: 1rem;
    font-weight: 700;
    font-style: italic;
    font-size: 1.5rem;
  }
}
</style>
