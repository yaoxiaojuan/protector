<template>
  <div class="quizItem">
    <h4>{{index}}. {{title}}</h4>
    <ul>
      <li
        v-for="(option,index) in options"
        v-bind:class="{'selected':index === result}"
        v-on:click="handleClick(index)"
      >
        <span class="circle"></span>
        <p>{{ option }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QuizItem',
  props: ['index', 'title', 'type', 'result'],
  data () {
    return {
      current: null,
      options: [
        '没有或很少时间',
        '小部分时间',
        '相当多时间',
        '绝大部分或全部时间'
      ]
    }
  },
  methods: {
    handleClick: function (index) {
      this.$emit('setResult', this.index - 1, index)
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
    padding: 0 0 5px;
    text-align: left;
    border-bottom: 1px solid #eeefef;
    display: flex;
    justify-content: space-around;
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
      &.selected .circle{
        background: #f4ae6c;
        opacity: 1!important;
      }
      &:nth-child(1) .circle{
        opacity: 0.3;
      }
      &:nth-child(2) .circle{
        opacity: 0.5;
      }
      &:nth-child(3) .circle{
        opacity: 0.7;
      }
      &:nth-child(4) .circle{
        opacity: 1;
      }
      &:nth-child(5) .circle{
        border-color: #ff6d00;
        opacity: 0.8;
      }
      &:nth-child(6) .circle{
        border-color: #ff6d00;
      }
    }

  }
}
</style>
