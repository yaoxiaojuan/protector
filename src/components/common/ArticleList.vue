<template>
  <div :class="className + ' SectionNav'">
    <a class="back" :href="backUrl"><</a>
    <div class="title">{{ title }}</div>
    <ul class="flex">
      <li v-for="(item,index) in nav">
        <div class="step"><span>{{ index + 1 }}</span>Lesson</div>
        <a :href="item.href">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SectionNav',
  props: ['nav', 'title', 'backUrl', 'className'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$bgColor: #f0eee6;
$highLight: #f4ae6c;
$ORANGE-LIGHT: #eccf8b;
.SectionNav{
  background: $bgColor;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  a.back{
    position: absolute;
    left: 1em;
    top: .3em;
    color: #fff;
    font-size: 1.5em;
    font-weight: 700;
  }
  .title{
    line-height: 3em;
    text-align: center;
    background: $highLight;
    color: #fff;
  }
  ul.flex{
    width: 70%;
    min-height: inherit;
    margin: 0 auto;
    border-left: .3em solid $highLight;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    li{
      position: relative;
      padding: 4em 1em;
      height: 3.6em;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      a{
        padding: 0 2em;
        font-size: 1.2em;
      }
      .step{
        position: absolute;
        width: 4em;
        height: 4em;
        left: -2.1em;
        color: #fff;
        background: $highLight;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        span{
          display: inline-block;
          background: #fff;
          color: $highLight;
          width: 1.5em;
          height: 1.5em;
          text-align: center;
          line-height: 1.5em;
          border-radius: 50%;
          font-weight: 700;
        }
      }
      &:after{
        content: '';
        width: .8em;
        height: .8em;
        position: absolute;
        right: 0;
        border-top: .2em solid #ccc;
        border-right: .2em solid #ccc;
        transform: rotate(45deg);
      }
    }
  }
}
@mixin them($color: $highLight) {
  .title{
    background: $color;
  }
  ul.flex{
    border-color: $color;
    li .step{
      background: $color;
      span{
        color: $color;
      }
    }
  }
}

.ORANGE-LIGHT {
  @include them($ORANGE-LIGHT);
}
</style>
