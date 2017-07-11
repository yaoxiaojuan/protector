<template>
  <div class="quizItem">
    <h4>{{index}}. {{title}}</h4>
    <ul>
      <li>
        <span class="circle"></span>
        <p>Not at all</p>
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
export default {
  name: 'QuizItem',
  props: ['index', 'title'],
  data () {
    return {
      page: 0,
      step: 0
    }
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

<style lang="scss" scoped>
.quizItem{
  margin: 0 15px;
  h4{
    font-style: oblique;
    color: #65737c;
    text-align: left;
    margin-bottom: 10px;
  }
  ul{
    margin: 0;
    padding: 0;
    text-align: left;
    li{
      list-style: none;
      font-size: 12px;
      text-align: center;
      margin: 5px 2px;
      display: inline-block;
      .circle{
        display: block;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        border: 2px solid #f4ae6c;
        margin: 0 auto 5px;
      }
      p{
        margin: 0;
      }
    }

  }
}
</style>
