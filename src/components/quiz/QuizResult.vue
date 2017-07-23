<template>
  <div>
    <div class="img">{{ score }}%</div>
    <div class="content">
      <h1>{{ leval }}</h1>
      You have answered this report questionnaire in such a way as to suggest that it is unlikely that your loved one is currently suffering from a depressive disorder.
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizResult',
  data () {
    return {
      score: 0,
      leval: '没有抑郁'
    }
  },
  props: ['result'],
  created: function () {
    this.score = parseInt(this.result * 1.25)
    if (this.score < 53) {
      this.leval = '没有抑郁'
    } else if (this.score < 62) {
      this.leval = '轻度抑郁'
    } else if (this.score < 72) {
      this.leval = '中度抑郁'
    } else {
      this.leval = '重度抑郁'
    }
  }
}
</script>

<style lang="scss" scoped>
  .img{
    background: url('../../assets/farmer/quizResult.png') no-repeat center;
    background-size: 100%;
    width:250px;
    height: 250px;
    margin: 2rem auto;
    line-height: 260px;
    color: #fff;
    font-size: 50px;
    padding-left: 40px;
    box-sizing: border-box;
    font-style: italic;
    font-weight: 600;
  }
  h1{
    top: -3rem;
    background: #fff;
    font-size: 30px;
    position: absolute;
    width: 150px;
    left: 50%;
    margin-left: -75px;
    text-align: center;
    color: #88ceca;
    font-style: italic;
  }
  .content{
    position: relative;
    width: 21rem;
    margin: 0 auto;
    padding: 3rem 0 0;
    border-top: 1px solid #88ceca;
    font-weight: 700;
    color: #65737c;
  }
</style>
