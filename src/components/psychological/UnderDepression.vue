<template>
  <div class="articleBox layout">
    <ArticleList
      :nav="articleList"
      backUrl="#/psychological?step=1"
      title="UNDERSTANDING DEPRESSION"
    />
  </div>
</template>

<script>
import ArticleList from '../common/ArticleList.vue'
import Data from './data.json'
export default {
  name: 'UnderDepression',
  data () {
    return {
      articleList: Data.UnderDepression
    }
  },
  components: {
    ArticleList
  },
  methods: {
  }
}
</script>
