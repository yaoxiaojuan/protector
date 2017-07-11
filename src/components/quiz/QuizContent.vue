<template>
  <div>
    <QuizItem
      v-if="step === 0"
      v-for="(quiz,index) in quizs"
      :title="quiz.title"
      :index="index+1"
      key="index"
    />
    <QuizResult
      v-else-if="step === 1"
    />
    <div v-if="step === 0" v-on:click="handlePage">></div>
  </div>
</template>

<script>
import QuizResult from './QuizResult.vue'
import QuizItem from './QuizItem.vue'
export default {
  name: 'QuizContent',
  data () {
    return {
      page: 0,
      step: 0,
      quizs: [
        {title: 'He/She does things slowly.', result: 3},
        {title: 'He/She does things slowly.', result: 3},
        {title: 'He/She does things slowly.', result: 3},
        {title: 'He/She does things slowly.', result: 3}
      ]
    }
  },
  components: {
    QuizResult,
    QuizItem
  },
  methods: {
    handlePage: function () {
      this.page += 1
      if (this.page > 2) {
        this.step = 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
