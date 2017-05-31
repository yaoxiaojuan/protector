<template>
  <div>
    <Navigation/>
    <h1>文章标题</h1>
    <p>文章内容</p>
  </div>
</template>

<script>
import Navigation from '../common/Navigation.vue'
export default {
  name: 'Article',
  data () {
    return {
      toggle: true
    }
  },
  components: {
    Navigation
  },
  methods: {
    handleToggle: function () {
      let toggleNew = !this.toggle
      this.toggle = toggleNew
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
