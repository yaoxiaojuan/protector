<template>
  <div class="welcome">
    <div class="sun"></div>
    <ul class="roles">
      <li class="seed">
        <div class="img"></div>
        <a href="#/seed">SEED</a>
      </li>
      <li class="farmer">
        <div class="img"></div>
        <a href="#/farmer">FARMER</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .welcome{
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -12rem;
    .sun{
      width: 7rem;
      height: 7rem;
      margin: 0 auto;
      background: url(../assets/common/sun.png) no-repeat center;
      background-size: 100%;
    }
    ul.roles{
      width: 14rem;
      margin: 0 auto;
      padding: 0;
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      li{
        width: 6rem;
        list-style: none;
        .img{
          height: 7.5rem;
          width: 5rem;
          margin: 0 auto;
          position: relative;
          &:after{
            content: '';
            display: block;
            width: 5rem;
            height: 1rem;
            background: #eee9e2;
            border-radius: 4rem/1rem;
            position: absolute;
            bottom: 0;
          }
        }
        a{
          width: 6rem;
          height: 3rem;
          border: 0.2rem solid #eee9e2;
          border-radius: 2rem;
          text-decoration: none;
          display: block;
          line-height: 3rem;
          margin-top: 2rem;;
          box-sizing: border-box;
          color: #69bde5;
          cursor: pointer;
        }
        &.seed .img{
          background: url(../assets/seed/seed.jpg) no-repeat top;
          background-size: 90%;
        }
        &.farmer .img{
          background: url(../assets/farmer/farmer.jpg) no-repeat top;
          background-size: 100%;
        }
      }
    }
  }
</style>
