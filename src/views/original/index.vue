<template>
  <div>
    <input-original v-if="type !== 'result'"></input-original>
    <result-original v-else></result-original>
  </div>
</template>

<script>
import InputOriginal from './inputOriginal.vue'
import ResultOriginal from './resultOriginal.vue'

export default {
  name: 'original',
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
    InputOriginal,
    ResultOriginal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
