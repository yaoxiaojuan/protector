<template>
  <div class="menuBox">
    <ul class="menu farmer">
      <li>
        <a href="#/quiz">
          <div class="img menu1"></div>
          <p>QUIZ</p>
        </a>
      </li>
      <li>
        <a href="#/psychological">
          <div class="img menu2"></div>
          <p>PSYCHOLOGICAL</p>
        </a>
      </li>
      <li>
        <a href="#/tips">
          <div class="img menu3"></div>
          <p>TIPS & ADVICE</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Farmer',
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
  .menuBox{
    background: #f0eee6;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    ul.menu{
      width: 100%;
      text-align: center;
      list-style: none;
      padding: 3rem 0;
      margin: 0;
      li{
        margin-bottom: 2rem;
        .img{
          width: 7rem;
          height: 7rem;
          margin: 5px auto;
          border-radius: 50%;
          background: #fff;
          overflow: hidden;
        }
        @for $i from 1 through 3{
          .menu#{$i}:before{
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background: url(../assets/farmer/menu#{$i}.jpg) no-repeat center;
            background-size: 100%;
          }
        }
        a{
          color: #4aa2a4;
          text-decoration: none;
          font-size: 1.2rem;
          font-style: oblique;
          font-weight: 700;
        }
      }
    }
  }
</style>
