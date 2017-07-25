<template>
  <div class="intro">
    <img
      v-if="name === 'quiz'"
      src="../../assets/farmer/testAndCloud.png"
      alt=""
    />
    <img
      v-if="name === 'psychological'"
      src="../../assets/farmer/testAndCloud.png"
      alt=""
    />
    <p class="content">{{ currentIntro }}</p>
    <p class="info">{{ currentInfo }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionIntro',
  data () {
    return {
      content: {
        quiz: 'Use this brief 18-question automated quiz to help you determine if your friend may need to see a mental health professional for diagnosis and treatment of depression.',
        psychological: 'The most sensible way to lower rates of depression is...to spread accurate information among the general public about what depression is '
      },
      info: {
        quiz: 'This quiz should not replace a diagnosis by a mental health professional. Quit designed by psychcentral.',
        psychological: 'The purpose of this part is to popularize the knowledge about depression in order to reduce depression.'
      },
      currentIntro: '',
      currentInfo: ''
    }
  },
  created: function () {
    this.currentIntro = this.content[this.name]
    this.currentInfo = this.info[this.name]
  },
  props: ['name']
}
</script>

<style lang="scss" scoped>
.intro{
  img{
    width: 50%;
    margin: 3rem auto 1rem;
  }
  .content,.info{
    width: 21rem;
    margin: 0 auto;
    padding: 1rem 0 0;
    border-top: 1px solid #f4ae6c;
    font-weight: 700;
    color: #65737c;
  }
  .info{
    border: none;
    font-weight: normal;
    color: #f4ae6c;
  }
}
</style>
