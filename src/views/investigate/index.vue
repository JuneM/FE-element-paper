<template>
  <div>
    <input-paper v-if="type !== 'result'"></input-paper>
    <result-paper v-else></result-paper>
  </div>
</template>

<script>
import InputPaper from './inputPaper.vue'
import ResultPaper from './resultPaper.vue'

export default {
  name: 'investigate',
  data () {
    return {
    }
  },
  computed: {
    type () {
      return this.$route.query.type
    }
  },
  components: {
    InputPaper,
    ResultPaper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
