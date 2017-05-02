<template>
  <div>
    <div class="disclaimer">
      <h2>免责申明</h2>
      <div class="content"></div>
    </div>
    <Loading v-if="false"></Loading>
  </div>
</template>

<script>
import Loading from 'components/loading/index'
export default {
  name: 'disclaimer',
  data () {
    return {
    }
  },
  components: {
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './index.less';
</style>
