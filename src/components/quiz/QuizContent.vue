<template>
  <div>
    <div v-if="step === 0">{{page}}. He/She does things slowly.</div>
    <QuizResult
      v-else-if="step === 1"
    />
    <div v-if="step === 0" v-on:click="handlePage">></div>
  </div>
</template>

<script>
import QuizResult from './QuizResult.vue'
export default {
  name: 'QuizContent',
  data () {
    return {
      page: 0,
      step: 0
    }
  },
  components: {
    QuizResult
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
