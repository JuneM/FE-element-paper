<template>
  <div>
    <input-paper></input-paper>
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
  components: {
    InputPaper,
    ResultPaper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
