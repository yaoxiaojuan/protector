<template>
  <div>
    <h3>{{num}}. {{title}}</h3>
    <ul>
      <li>
        <span class="circle"></span>
        <p>Not at</p>
      </li>
      <li>
        <span class="circle"></span>
        <p>Just a little</p>
      </li>
      <li>
        <span class="circle"></span>
        <p>Somewhat</p>
      </li>
      <li>
        <span class="circle"></span>
        <p>Moderately</p>
      </li>
      <li>
        <span class="circle"></span>
        <p>Quite a lot</p>
      </li>
      <li>
        <span class="circle"></span>
        <p>Very much</p>
      </li>
    </ul>
  </div>
</template>

<script>
import QuizResult from './QuizResult.vue'
export default {
  name: 'QuizItem',
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
