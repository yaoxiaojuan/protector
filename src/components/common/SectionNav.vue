<template>
  <div class="SectionNav">
    <ul class="flex">
      <li v-for="(item,index) in nav">
      <span class="step">step{{ index + 1 }}</span>
        <a :href="item.href">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SectionNav',
  props: ['nav'],
  data () {
    return {
      toggle: true
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
.SectionNav{
  background: $bgColor;
  width: 100%;
  height: 100%;
  ul.flex{
    width: 70%;
    height: inherit;
    margin: 0 auto;
    border-left: .5em solid $highLight;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    li{
      position: relative;
      padding: 0 1em;
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
        width: 3.6em;
        line-height: 3.6em;
        left: -2.1em;
        background: $highLight;
        border-radius: 50%;
        color: #fff;
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
</style>
