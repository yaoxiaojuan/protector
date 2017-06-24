<template>
  <transition name="fade">
    <div
      v-if='isShow'
      class="intro"
      v-on:touchstart="touchstart"
      v-on:touchmove="touchmove"
      v-on:touchend="touchend"
    >
      <div class="introCont">
        <div class="slideBox" style="position: relative">
          <p v-bind:style="{left: slide[0] + 'px'}">Every piece of information is very important, please read carefully.</p>
          <p v-bind:style="{left: slide[1] + 'px'}" v-for="item in slide">
            If you have been diagnosed with depression, choose <span class="icon seed" id="seed"></span>, if not, choose<span class="icon farmer"></span>
          </p>
        </div>
        <div class="slidePage">
          <span v-bind:class="{'selected':currentPage===0}"></span>
          <span v-bind:class="{'selected':currentPage===1}"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Intro',
    props: ['isShow'],
    data () {
      return {
        currentPage: 0,
        xStart: 0,
        xEnd: 0,
        xOffset: 0,
        slide: [0, 208]
      }
    },
    methods: {
      touchstart: function (event) {
        event.preventDefault()
        let touch = event.touches[0]
        this.xStart = touch.pageX
      },
      touchmove: function (event) {
        event.preventDefault()
        let touch = event.targetTouches[0]
        this.xEnd = touch.pageX
        this.xOffset = this.xEnd - this.xStart
        this.slide[0] = this.slide[0] - this.xOffset
        this.slide[1] = this.slide[1] - this.xOffset
      },
      touchend: function (event) {
        event.preventDefault()
        if (this.xOffset > 0) {
          this.currentPage = 0
          this.slide[0] = 0
          this.slide[1] = 208
        } else if (this.xOffset < 0 && this.currentPage === 0) {
          this.currentPage = 1
          this.slide[0] = -208
          this.slide[1] = 0
        } else if (this.xOffset < 0 && this.currentPage === 1) {
          window.location.href = '#/index'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .intro{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .intro .introCont{
    position: relative;
    top: 50%;
    left: 50%;
    margin-left: -7rem;
    margin-top: -7rem;
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    background: #fff;
    box-sizing: border-box;
    color: #f39800;
    font-style: italic;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }
  .slideBox{
    position: relative;
    height: 80px;
    width: 100%;
    overflow: hidden;
  }
  .slideBox p{
    margin: 0;
    position: absolute;
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
  .slideBox p .icon{
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: text-top;
    margin: 0 5px;
  }
  .slideBox p .icon.seed{
    background: url(../assets/seed/seed.jpg) no-repeat center;
    background-size: 100%;
  }
  .slideBox p .icon.farmer{
    background: url(../assets/farmer/farmer.jpg) no-repeat center;
    background-size: 100%;
  }
  .slidePage{
    position: absolute;
    bottom: 2rem;
    left: 50%;
    margin-left: -0.8rem;
    width: 1.6rem;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .slidePage span{
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    display: inline-block;
    border: 2px solid #8490ad;
    box-sizing: border-box;
  }
  .slidePage span.selected{
    background: #8490ad;
  }
</style>
