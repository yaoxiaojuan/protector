<template>
  <div class="articleBox layout">
    <ArticleList
      :nav="articleList"
      backUrl="#/psychological?step=1"
      title="TREATMENT OPTIONS"
      className="ORANGE-LIGHT"
    />
  </div>
</template>

<script>
import ArticleList from '../common/ArticleList.vue'
import Data from './data.json'
export default {
  name: 'TreatmentOptions',
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
