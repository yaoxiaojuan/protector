<template>
  <div>
    <QuizItem
      v-for="(quiz,index) in quizs[page]"
      :title="quiz.title"
      :index="5*(page) + index + 1"
      :type="quiz.type"
      :result="quiz.result"
      key="5*(page-1) + index"
      v-on:setResult="setResult"
    />
    <div v-if="tips" class="tips">请完成本页的测试题目</div>
    <button
      v-if="page > 0"
      class="button small"
      v-on:click="handlePage('back')"
    >上一页 </button>
    <button
      v-if="page < 4"
      class="button small"
      v-on:click="handlePage('front')"
    >下一页</button>
    <button
      v-if="page === 4"
      class="button small"
      v-on:click="handleSubmit"
    >完成</button>
  </div>
</template>

<script>
import QuizItem from './QuizItem.vue'
export default {
  name: 'QuizContent',
  data () {
    return {
      page: 0,
      quizs: {
        0: [
          {title: '我觉得闷闷不乐，情绪低沉。', type: 0, result: null},
          {title: '我觉得一天之中早晨最好。', type: 1, result: null},
          {title: '我一阵阵哭出来或觉得想哭。', type: 0, result: null},
          {title: '我晚上睡眠不好。', type: 0, result: null},
          {title: '我吃的跟平成一样多。', type: 1, result: null}
        ],
        1: [
          {title: '我与异性亲密接触时和以往一样感觉愉快。', type: 1, result: null},
          {title: '我发觉我的体重在下降。', type: 0, result: null},
          {title: '我有便秘的苦恼。', type: 0, result: null},
          {title: '我心跳比平时快。', type: 0, result: null},
          {title: '我无缘无故地感到疲乏。', type: 0, result: null}
        ],
        2: [
          {title: '我的头脑跟平常一样清楚。', type: 1, result: null},
          {title: '我觉得经常做的事情并没有困难。', type: 1, result: null},
          {title: '我觉得不安而平静不下来。', type: 0, result: null},
          {title: '我觉得经常做的事情并没有困难。', type: 1, result: null},
          {title: '我对将来抱有希望。', type: 0, result: null}
        ],
        3: [
          {title: '我比平常容易生气激动。', type: 1, result: null},
          {title: '我觉得作出决定是容易的。', type: 1, result: null},
          {title: '我觉得自己是个有用的人，有人需要我。', type: 1, result: null},
          {title: '我的生活过得很有意思。', type: 0, result: null},
          {title: '我认为如果我死了别人会生活得好些。', type: 1, result: null}
        ],
        4: [
          {title: '平常感兴趣的事我仍然照样感兴趣。', type: 0, result: null}
        ]
      },
      result: 0,
      tips: false
    }
  },
  components: {
    QuizItem
  },
  methods: {
    handlePage: function (type) {
      if (type === 'back' && this.page > 0) {
        this.page -= 1
      } else if (type === 'front' && this.page <= 3) {
        this.page += 1
      }
    },
    setResult: function (index, result) {
      this.quizs[parseInt(index / 5)][index % 5]['result'] = result
    },
    handleSubmit: function () {
      this.result = 0
      for (let quiz in this.quizs) {
        let item = this.quizs[quiz]
        for (var i = item.length - 1; i >= 0; i--) {
          if (item[i].result === null) {
            this.tips = true
            this.page = quiz * 1
            return
          } else {
            if (!item[i].type) {
              this.result += item[i].result + 1
            } else {
              this.result += 4 - item[i].result
            }
          }
        }
      }
      this.$emit('setStep', 2)
      this.$emit('setResult', this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
.tips{
  width: 100%;
  text-align: center;
  padding: 10px 0;
  color: #f4ae6c;
}
</style>
