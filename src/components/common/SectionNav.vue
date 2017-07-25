<template>
  <ul>
    <li v-for="item in nav"><a href="item.href">{{ item.name }}</a></li>
  </ul>
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
</style>
