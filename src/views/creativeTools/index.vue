<template>
  <div>
    <input-tools v-if="type !== 'result'"></input-tools>
    <result-tools v-else></result-tools>
  </div>
</template>

<script>
import InputTools from './inputTools.vue'
import ResultTools from './resultTools.vue'

export default {
  name: 'tools',
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
    InputTools,
    ResultTools
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
